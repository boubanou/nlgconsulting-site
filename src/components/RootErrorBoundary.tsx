import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

class RootErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("NLG frontend render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary mb-3">
              NLG Consulting
            </p>
            <h1 className="text-3xl font-semibold mb-4">The site is temporarily reloading.</h1>
            <p className="text-muted-foreground mb-6">
              Please refresh this page. If the issue continues, you can still access the French or English homepage below.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground" href="/">
                English
              </a>
              <a className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium" href="/fr">
                Français
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default RootErrorBoundary;
