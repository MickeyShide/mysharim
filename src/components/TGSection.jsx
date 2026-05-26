import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Shield, Tag, Calendar, WifiOff, ExternalLink } from 'lucide-react'
import { BtnPrimary } from './Hero'

const CHANNEL = 'lympro'
const PROXY_URL = import.meta.env.VITE_TG_PROXY_URL || 'https://restless-sky-91a8.mickeyshide.workers.dev/'
const FEED_TIMEOUT = 8000

function extractTags(text) {
  return (text.match(/#[\wа-яёА-ЯЁ-]+/g) ?? []).slice(0, 3)
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
      className="flex flex-col gap-[10px] bg-[rgba(255,255,255,0.04)] p-4 no-underline transition-colors duration-150 hover:bg-[rgba(255,255,255,0.07)]"
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-[9px] text-page-white tracking-[.08em]">@{CHANNEL}</span>
        <span className="font-mono text-[8px] text-dim3 flex items-center gap-1">
          <Calendar size={9} />{post.date}
        </span>
      </div>

      <h3 className="font-manrope text-[12px] font-bold leading-[1.4] m-0" style={{ color: 'var(--white)' }}>
        {post.title}
      </h3>

      {post.preview && (
        <p
          className="font-manrope text-[11px] text-dim3 leading-[1.6] m-0 overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {post.preview}
        </p>
      )}

      <div className="flex flex-wrap gap-[5px] mt-auto pt-1 items-center">
        {post.tags.slice(0, 2).map(tag => (
          <span key={tag} className="inline-flex items-center gap-[3px] bg-[rgba(224,191,255,0.08)] text-page-white font-mono text-[8px] px-[7px] py-[2px] tracking-[.05em]">
            <Tag size={8} />{tag.replace('#', '')}
          </span>
        ))}
        {post.views
          ? <span className="ml-auto font-mono text-[8px] text-dim3">👁 {post.views}</span>
          : <ExternalLink size={9} className="ml-auto text-dim3" />
        }
      </div>
    </a>
  )
}

function FeedBlockade({ onRetry, loading }) {
  return (
    <div className="border border-[rgba(239,68,68,0.25)] px-6 py-8 flex flex-col items-center text-center gap-4 bg-[rgba(239,68,68,0.04)]">
      <div className="flex items-center gap-2 text-[rgba(239,68,68,0.8)]">
        <WifiOff size={16} />
        <span className="font-mono text-[9px] tracking-[.2em]">ACCESS_DENIED</span>
      </div>
      <div className="flex items-center gap-[6px] bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] px-3 py-1">
        <Shield size={11} className="text-[rgba(239,68,68,0.8)]" />
        <span className="font-mono text-[8px] text-[rgba(239,68,68,0.8)] tracking-[.15em]">TRAFFIC_TOO_LEGAL</span>
      </div>
      <p className="font-manrope text-[12px] text-dim3 leading-[1.7] m-0 max-w-[280px]">
        Обнаружен слишком <span style={{ color: 'var(--white)' }}>легальный</span> трафик. Включи VPN и возвращайся.
      </p>
      <button
        onClick={onRetry}
        disabled={loading}
        className="flex items-center gap-2 bg-acid text-page-black font-mono text-[9px] font-bold tracking-[.1em] border-none px-5 py-[10px] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        <RefreshCw size={12} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
        {loading ? 'ПРОВЕРЯЮ...' : 'ВКЛЮЧИЛ, ОБНОВИТЬ'}
      </button>
    </div>
  )
}

export default function TGSection() {
  const [status, setStatus] = useState('loading')
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

  useEffect(() => {
    queueMicrotask(load)
  }, [load])

  return (
    <section
      className="tg-grid px-5 py-14 md:px-12 md:py-24 border-t border-dim relative z-[1] grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-10 items-start overflow-hidden"
    >
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-bebas tracking-[.05em] pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: 'clamp(100px,18vw,240px)', color: 'rgba(224,191,255,.025)' }}
      >
        TG
      </div>

      <div className="reveal md:sticky md:top-24">
        <div className="font-mono text-[9px] tracking-[.25em] text-acid uppercase mb-[14px] flex items-center gap-[10px]">
          <span>//</span>Телеграм-канал
        </div>
        <h2 className="font-bebas text-[clamp(56px,8vw,110px)] leading-[.95] mb-6">
          МЫ В<br />ТЕЛЕ&shy;ГРАМЕ
        </h2>
        <p className="font-manrope text-[13px] font-light text-dim3 leading-[1.85] mb-9 max-w-[380px]">
          Кейсы, закулисье, оборудование и процессы — в реальном времени. Подпишись, чтобы быть в теме.
        </p>
        <BtnPrimary href={`https://t.me/${CHANNEL}`}>→ Подписаться</BtnPrimary>
      </div>

      <div className="reveal md:mt-24">
        {status === 'loading' && (
          <div className="border border-dim2 px-6 py-12 flex flex-col items-center gap-3 text-dim3">
            <RefreshCw size={20} className="text-page-white animate-spin" />
            <span className="font-mono text-[9px] tracking-[.15em]">ПРОВЕРЯЕМ ТРАФИК…</span>
          </div>
        )}

        {status === 'blocked' && <FeedBlockade onRetry={load} loading={false} />}

        {status === 'error' && (
          <div className="border border-dim2 px-6 py-8 text-center">
            <p className="font-mono text-[9px] text-dim3 tracking-[.1em] mb-4">НЕ УДАЛОСЬ ЗАГРУЗИТЬ ПОСТЫ</p>
            <button
              onClick={load}
              className="bg-transparent border border-dim2 text-dim3 font-mono text-[8px] px-[14px] py-[6px] cursor-pointer tracking-[.08em]"
            >
              ПОВТОРИТЬ
            </button>
          </div>
        )}

        {status === 'ready' && (
          <div className="flex flex-col">
            <div className="border border-dim2">
              {posts.map((post, i) => (
                <div key={post.id} className={i < posts.length - 1 ? 'border-b border-dim' : ''}>
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
