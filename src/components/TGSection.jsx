import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Shield, Tag, Calendar, WifiOff, ExternalLink } from 'lucide-react'
import { BtnPrimary } from './Hero'

const CHANNEL = 'weshareem'
const PROXY_URL = import.meta.env.VITE_TG_PROXY_URL || 'https://restless-sky-91a8.mickeyshide.workers.dev/'
const FEED_TIMEOUT = 8000

function extractTags(text) {
  return (text.match(/#[\wа-яёА-ЯЁ\-]+/g) ?? []).slice(0, 3)
}

function formatDate(datetime) {
  const d = new Date(datetime)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}

async function loadFeedData() {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FEED_TIMEOUT)
  try {
    if (!PROXY_URL) throw new Error('VITE_TG_PROXY_URL not set')
    const res = await fetch(PROXY_URL, { signal: controller.signal, cache: 'no-store' })
    if (!res.ok) throw new Error(`http ${res.status}`)

    const country = res.headers.get('X-Country') ?? 'XX'
    const isVpn = country !== 'RU'

    if (!isVpn) return { blocked: true }

    const html = await res.text()
    const doc = new DOMParser().parseFromString(html, 'text/html')
    const messages = [...doc.querySelectorAll('.tgme_widget_message')]
      .filter(el => el.querySelector('.tgme_widget_message_text'))
      .slice(0, 5)

    const posts = messages.map((el, i) => {
      const plain = (el.querySelector('.tgme_widget_message_text')?.textContent ?? '').trim()
      const lines = plain.split('\n').map(l => l.trim()).filter(Boolean)
      const title = lines[0]?.slice(0, 80) ?? 'Пост'
      const preview = lines.slice(1).join(' ').slice(0, 200) || ''
      const tags = extractTags(plain)
      const datetime = el.querySelector('time')?.getAttribute('datetime') ?? ''
      const link = el.querySelector('.tgme_widget_message_date')?.getAttribute('href')
        ?? `https://t.me/${CHANNEL}`
      const views = el.querySelector('.tgme_widget_message_views')?.textContent?.trim() ?? ''
      return { id: i, title, preview, tags, date: formatDate(datetime), link, views }
    })

    return { blocked: false, posts }
  } finally {
    clearTimeout(timer)
  }
}

function PostCard({ post }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', gap: '10px',
        background: 'rgba(255,255,255,.04)',
        padding: '16px',
        textDecoration: 'none',
        transition: 'background .15s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.07)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#E0BFFF', letterSpacing: '.08em' }}>
          @{CHANNEL}
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'var(--dim3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Calendar size={9} />
          {post.date}
        </span>
      </div>

      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1.4, margin: 0 }}>
        {post.title}
      </h3>

      {post.preview && (
        <p style={{
          fontFamily: "'Manrope', sans-serif", fontSize: '11px', color: 'var(--dim3)',
          lineHeight: 1.6, margin: 0,
          overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        }}>
          {post.preview}
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto', paddingTop: '4px', alignItems: 'center' }}>
        {post.tags.slice(0, 2).map(tag => (
          <span key={tag} style={{
            display: 'inline-flex', alignItems: 'center', gap: '3px',
            background: 'rgba(224,191,255,.08)', color: '#E0BFFF',
            fontFamily: "'Space Mono', monospace", fontSize: '8px',
            padding: '2px 7px', letterSpacing: '.05em',
          }}>
            <Tag size={8} />
            {tag.replace('#', '')}
          </span>
        ))}
        {post.views
          ? <span style={{ marginLeft: 'auto', fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'var(--dim3)' }}>👁 {post.views}</span>
          : <ExternalLink size={9} style={{ marginLeft: 'auto', color: 'var(--dim3)' }} />
        }
      </div>
    </a>
  )
}

function FeedBlockade({ onRetry, loading }) {
  return (
    <div style={{
      border: '1px solid rgba(239,68,68,.25)',
      padding: '32px 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px',
      background: 'rgba(239,68,68,.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(239,68,68,.8)' }}>
        <WifiOff size={16} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '.2em' }}>ACCESS_DENIED</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.2)', padding: '4px 12px' }}>
        <Shield size={11} style={{ color: 'rgba(239,68,68,.8)' }} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'rgba(239,68,68,.8)', letterSpacing: '.15em' }}>TRAFFIC_TOO_LEGAL</span>
      </div>
      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', color: 'var(--dim3)', lineHeight: 1.7, margin: 0, maxWidth: '280px' }}>
        Обнаружен слишком <span style={{ color: 'var(--fg)' }}>легальный</span> трафик. Включи VPN и возвращайся.
      </p>
      <button
        onClick={onRetry}
        disabled={loading}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'var(--acid)', color: '#07050d',
          fontFamily: "'Space Mono', monospace", fontSize: '9px',
          fontWeight: 700, letterSpacing: '.1em',
          border: 'none', padding: '10px 20px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
        }}
      >
        <RefreshCw size={12} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
        {loading ? 'ПРОВЕРЯЮ...' : 'ВКЛЮЧИЛ, ОБНОВИТЬ'}
      </button>
    </div>
  )
}

export default function TGSection() {
  const [status, setStatus] = useState('loading') // loading | blocked | error | ready
  const [posts, setPosts] = useState([])

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const data = await loadFeedData()
      if (data.blocked) {
        setStatus('blocked')
      } else {
        setPosts(data.posts)
        setStatus('ready')
      }
    } catch {
      setStatus('blocked')
    }
  }, [])

  useEffect(() => { load() }, [load])

  return (
    <section className="tg-grid" style={{
      padding: '96px 48px',
      borderTop: '1px solid var(--dim)',
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(100px,18vw,240px)',
        color: 'rgba(224,191,255,.025)',
        letterSpacing: '.05em',
        pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap',
      }}>TG</div>

      <div className="reveal" style={{ position: 'sticky', top: '96px' }}>
        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '.25em',
          color: 'var(--acid)', textTransform: 'uppercase', marginBottom: '14px',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span>//</span>Телеграм-канал
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px,8vw,110px)', lineHeight: '.95', marginBottom: '24px' }}>
          МЫ В<br />ТЕЛЕ&shy;ГРАМЕ
        </h2>
        <p style={{
          fontFamily: "'Manrope', sans-serif", fontSize: '13px', fontWeight: 300,
          color: 'var(--dim3)', lineHeight: 1.85, marginBottom: '36px', maxWidth: '380px',
        }}>
          Кейсы, закулисье, оборудование и процессы — в реальном времени. Подпишись, чтобы быть в теме.
        </p>
        <BtnPrimary href={`https://t.me/${CHANNEL}`}>→ Подписаться</BtnPrimary>
      </div>

      <div className="reveal" style={{'marginTop': '96px',}}>
        {status === 'loading' && (
          <div style={{
            border: '1px solid var(--dim2)', padding: '48px 24px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', color: 'var(--dim3)',
          }}>
            <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite', color: '#E0BFFF' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '.15em' }}>ПРОВЕРЯЕМ ТРАФИК…</span>
          </div>
        )}

        {status === 'blocked' && <FeedBlockade onRetry={load} loading={false} />}

        {status === 'error' && (
          <div style={{ border: '1px solid var(--dim2)', padding: '32px 24px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--dim3)', letterSpacing: '.1em', marginBottom: '16px' }}>
              НЕ УДАЛОСЬ ЗАГРУЗИТЬ ПОСТЫ
            </p>
            <button
              onClick={load}
              style={{ background: 'none', border: '1px solid var(--dim2)', color: 'var(--dim3)', fontFamily: "'Space Mono', monospace", fontSize: '8px', padding: '6px 14px', cursor: 'pointer', letterSpacing: '.08em' }}
            >
              ПОВТОРИТЬ
            </button>
          </div>
        )}

        {status === 'ready' && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              padding: '10px 16px',
              border: '1px solid var(--dim2)', borderBottom: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(15,15,15,.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#4ade80', letterSpacing: '.1em' }}>VPN АКТИВЕН</span>
              </div>
              <button
                onClick={load}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dim3)', display: 'flex', alignItems: 'center', gap: '5px', padding: 0 }}
              >
                <RefreshCw size={11} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '.08em' }}>ОБНОВИТЬ</span>
              </button>
            </div>
            <div style={{ border: '1px solid var(--dim2)' }}>
              {posts.map((post, i) => (
                <div key={post.id} style={{ borderBottom: i < posts.length - 1 ? '1px solid var(--dim)' : 'none' }}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
