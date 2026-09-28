import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-sec px-6 py-10 text-slate-800 sm:px-10 lg:px-16">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-20">
        <section className="mx-auto w-full max-w-xl">
          <h1 className="text-5xl font-black tracking-tight text-main sm:text-6xl">
            Route Posts
          </h1>
          <p className="mt-4 max-w-lg text-xl leading-relaxed text-slate-800 sm:text-2xl">
            Connect with friends and the world around you on Route Posts.
          </p>

          <div className="mt-7 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-main">
              About Route Academy
            </p>
            <h2 className="mt-2 text-lg font-extrabold text-slate-800">
              Egypt&apos;s Leading IT Training Center Since 2012
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Route Academy is the premier IT training center in Egypt,
              established in 2012. We specialize in delivering high-quality
              training courses in programming, web development, and application
              development. We&apos;ve identified the unique challenges people
              may face when learning new technology and made efforts to provide
              strategies to overcome them.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                ["2012", "Founded"],
                ["40K+", "Graduates"],
                ["50+", "Partner companies"],
                ["5", "Branches"],
                ["20", "Diplomas available"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-blue-200 bg-blue-50/70 px-3 py-3"
                >
                  <p className="text-base font-extrabold text-main">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          {/* here is the outlet */}
          <Outlet />
        </section>
      </div>
    </div>
  );
}
