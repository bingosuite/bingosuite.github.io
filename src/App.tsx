function App() {
  return (
    <main className="landing">
      <header className="hero section reveal">
        <p className="eyebrow">BinGo</p>
        <h1>A visual concurrency debugger built for Go.</h1>
        <p className="lead">
          See goroutines, channels, mutexes, and execution timelines in one
          place so race-adjacent bugs, leaks, and deadlocks stop hiding in logs.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#get-bingo">
            Get BinGo
          </a>
          <a className="btn btn-ghost" href="#features">
            Explore Features
          </a>
        </div>
        <div className="hero-panel" role="presentation" aria-hidden="true">
          <div className="terminal-line dim">$ bingo record ./cmd/api</div>
          <div className="terminal-line">captured 412 runtime events</div>
          <div className="terminal-line">goroutines active: 37</div>
          <div className="terminal-line alert">deadlock risk detected on ch_14</div>
        </div>
      </header>

      <section id="features" className="section reveal reveal-delay-1">
        <div className="section-head">
          <p className="eyebrow">Core Capabilities</p>
          <h2>Make concurrent behavior obvious</h2>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Track goroutine lifecycles</h3>
            <p>
              Follow creation, scheduling, blocking, and completion with a clear
              timeline instead of scattered traces.
            </p>
          </article>
          <article className="card">
            <h3>Inspect channels and mutexes</h3>
            <p>
              See send/receive contention, lock ownership, and waiting chains in
              context with the rest of runtime activity.
            </p>
          </article>
          <article className="card">
            <h3>Replay concurrent execution</h3>
            <p>
              Scrub through captured events frame by frame to pinpoint exactly
              where system behavior diverged.
            </p>
          </article>
          <article className="card">
            <h3>Catch deadlocks and leaks early</h3>
            <p>
              Surface hidden failure patterns that traditional debugger sessions
              and plain logs often miss.
            </p>
          </article>
        </div>
      </section>

      <section className="section reveal reveal-delay-2">
        <div className="section-head">
          <p className="eyebrow">Where It Fits</p>
          <h2>Use BinGo where you already work</h2>
        </div>
        <div className="stack">
          <div className="stack-item">
            <h3>Terminal UI for deep sessions</h3>
            <p>Run focused debugging sessions in a fast standalone interface.</p>
          </div>
          <div className="stack-item">
            <h3>Editor integrations</h3>
            <p>Inspect traces inside VS Code or Vim without breaking flow.</p>
          </div>
          <div className="stack-item">
            <h3>Modular, UI-agnostic core</h3>
            <p>
              Extend with new frontends and integrations using a clean runtime
              event pipeline.
            </p>
          </div>
        </div>
      </section>

      <section id="get-bingo" className="section cta-block reveal reveal-delay-3">
        <p className="eyebrow">Ship More Predictable Concurrency</p>
        <h2>Debug behavior, not guesses.</h2>
        <p>
          BinGo turns runtime concurrency into an interactive model your team can
          understand and act on.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#">
            Download
          </a>
          <a className="btn btn-ghost" href="#">
            Read Documentation
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
