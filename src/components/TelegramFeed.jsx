import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Shield, Tag, Calendar, Wifi, WifiOff } from "lucide-react";

const MOCK_POSTS = [
  {
    id: 1,
    title: "Новый релиз Rust 2.0: что изменилось",
    preview:
      "Команда Rust анонсировала масштабное обновление языка. Среди ключевых изменений — улучшенная система lifetime, новый синтаксис async/await и встроенный пакетный менеджер следующего поколения.",
    tags: ["#rust", "#dev", "#opensource"],
    date: "24 мая 2026",
    channel: "@devchanel",
    views: "12.4K",
  },
  {
    id: 2,
    title: "GPT-6 сливает код лучше джунов?",
    preview:
      "Свежее исследование показало, что GPT-6 проходит технические собеседования уровня Middle в 78% случаев. Интересно, что модель уверенно проваливается на вопросах «расскажите о себе».",
    tags: ["#ai", "#llm", "#юмор"],
    date: "23 мая 2026",
    channel: "@aibreakdown",
    views: "38.1K",
  },
  {
    id: 3,
    title: "Kubernetes умер. Да здравствует Kubernetes",
    preview:
      "Очередной цикл хайпа завершён. После трёх лет «смерти k8s» оркестрация контейнеров не только жива, но и захватила serverless. Разбираем, почему так произошло.",
    tags: ["#devops", "#k8s", "#infra"],
    date: "22 мая 2026",
    channel: "@infradigest",
    views: "9.7K",
  },
  {
    id: 4,
    title: "Как я написал компилятор на выходных",
    preview:
      "Хобби-проект, который вышел из-под контроля. Стартовал с парсера JSON, а закончил полноценным языком с JIT-компиляцией. Подробный дневник с кодом и граблями.",
    tags: ["#compilers", "#hobby", "#lowlevel"],
    date: "21 мая 2026",
    channel: "@bytecraft",
    views: "21.3K",
  },
  {
    id: 5,
    title: "Почему все CSS-фреймворки одинаковые",
    preview:
      "Tailwind, UnoCSS, Panda CSS — философия одна. Мы прошли круг от семантического CSS к атомарному и, кажется, снова движемся назад. История повторяется каждые 7 лет.",
    tags: ["#css", "#frontend", "#мнение"],
    date: "20 мая 2026",
    channel: "@pixelphilosophy",
    views: "15.8K",
  },
  {
    id: 6,
    title: "SQLite в продакшне: мифы и реальность",
    preview:
      "Сервис на 2 млн активных пользователей работает на SQLite уже полтора года. Рассказываем, что пришлось настроить, где были сюрпризы и когда всё-таки стоит взять Postgres.",
    tags: ["#database", "#sqlite", "#performance"],
    date: "19 мая 2026",
    channel: "@dbdeep",
    views: "44.2K",
  },
];

const GEO_API_TIMEOUT = 5000;

async function detectVpn() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GEO_API_TIMEOUT);
  try {
    const res = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
    });
    if (!res.ok) return true;
    const data = await res.json();
    return data.country_code !== "RU";
  } catch {
    return true;
  } finally {
    clearTimeout(timer);
  }
}

function PostCard({ post }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className="font-medium text-indigo-500">{post.channel}</span>
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {post.date}
        </span>
      </div>

      <h2 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2">
        {post.title}
      </h2>

      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
        {post.preview}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-0.5 bg-indigo-50 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full"
          >
            <Tag size={10} />
            {tag.replace("#", "")}
          </span>
        ))}
        <span className="ml-auto text-xs text-gray-400 self-center">
          👁 {post.views}
        </span>
      </div>
    </article>
  );
}

function VpnBlockade({ onRetry, isChecking }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
            alt="Cyberpunk error"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/40 rounded-lg px-3 py-1.5">
            <WifiOff size={14} className="text-red-400" />
            <span className="text-red-300 text-xs font-mono font-semibold tracking-wider">
              ACCESS_DENIED
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mx-auto">
            <Shield size={14} className="text-red-400" />
            <span className="text-red-400 text-xs font-mono">
              TRAFFIC_TOO_LEGAL
            </span>
          </div>

          <h1 className="text-white text-2xl font-bold leading-tight">
            Упс, обнаружен слишком{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              легальный
            </span>{" "}
            трафик!
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            Наши алгоритмы зафиксировали подозрительно чистый российский IP.
            Эта страница доступна исключительно для пользователей с надлежащим
            уровнем паранойи.{" "}
            <span className="text-gray-300">
              Включите VPN, наденьте шапочку из фольги и возвращайтесь.
            </span>
          </p>
        </div>

        <button
          onClick={onRetry}
          disabled={isChecking}
          className="group flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-150 shadow-lg shadow-indigo-900/40"
        >
          <RefreshCw
            size={16}
            className={isChecking ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-300"}
          />
          {isChecking ? "Проверяю..." : "Я включил, обновить"}
        </button>

        <p className="text-gray-600 text-xs">
          <Wifi size={10} className="inline mr-1" />
          Подключение проверяется через ipapi.co
        </p>
      </div>
    </div>
  );
}

export default function TelegramFeed() {
  const [isVpnActive, setIsVpnActive] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const runCheck = useCallback(async () => {
    setIsChecking(true);
    const vpn = await detectVpn();
    setIsVpnActive(vpn);
    if (vpn) setPosts(MOCK_POSTS);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    runCheck();
  }, [runCheck]);

  if (isVpnActive === null || (isChecking && isVpnActive === null)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-gray-400">
          <RefreshCw size={32} className="animate-spin text-indigo-400" />
          <p className="text-sm font-medium">Проверяем ваш трафик на легальность…</p>
        </div>
      </div>
    );
  }

  if (!isVpnActive) {
    return <VpnBlockade onRetry={runCheck} isChecking={isChecking} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-lg leading-none">TG Feed</h1>
              <p className="text-gray-400 text-xs">Агрегатор каналов</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700 text-xs font-semibold">VPN активен</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Последние посты</h2>
            <p className="text-gray-400 text-sm mt-0.5">{posts.length} записей</p>
          </div>
          <button
            onClick={runCheck}
            disabled={isChecking}
            className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 disabled:opacity-50 text-sm font-medium transition-colors"
          >
            <RefreshCw size={14} className={isChecking ? "animate-spin" : ""} />
            Обновить
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
