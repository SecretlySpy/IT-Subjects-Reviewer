import { FormEvent, useRef, useState } from 'react';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Demonstrate native submission, repeated FormData values, recovery, and safe text output.
 */
export function SafeFormLab() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [message, setMessage] = useState('Complete the form, then submit it with the button or Enter key.');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form, (event.nativeEvent as SubmitEvent).submitter);
    const username = String(formData.get('username') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const topics = formData.getAll('topics').map(String);

    setSubmissionState('loading');
    setMessage('Processing the simulated request…');
    await new Promise((resolve) => window.setTimeout(resolve, 350));

    if (email.toLowerCase().endsWith('@offline.test')) {
      setSubmissionState('error');
      setMessage('The simulated network is offline. Your answers were preserved; change the email or try again.');
      return;
    }

    setSubmissionState('success');
    setMessage(
      `Welcome, ${username}. We will contact ${email}. Topics: ${topics.length ? topics.join(', ') : 'none selected'}.`
    );
    form.reset();
  }

  return (
    <div className="mt-4 grid gap-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 md:grid-cols-[1fr_0.8fr]">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-describedby="safe-form-help">
        <p id="safe-form-help" className="text-sm text-[var(--text-secondary)]">
          Use an address ending in <code>@offline.test</code> to exercise the recoverable error state.
        </p>
        <div>
          <label htmlFor="safe-form-username" className="mb-1 block font-medium text-[var(--text-primary)]">Username</label>
          <input id="safe-form-username" name="username" autoComplete="username" required minLength={2} className="min-h-11 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] px-3 text-[var(--text-primary)]" />
        </div>
        <div>
          <label htmlFor="safe-form-email" className="mb-1 block font-medium text-[var(--text-primary)]">Email address</label>
          <input id="safe-form-email" name="email" type="email" autoComplete="email" required className="min-h-11 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] px-3 text-[var(--text-primary)]" />
        </div>
        <fieldset className="rounded-lg border border-[var(--border-subtle)] p-3">
          <legend className="px-1 font-medium text-[var(--text-primary)]">Topics</legend>
          <div className="flex flex-wrap gap-4">
            <label className="flex min-h-11 items-center gap-2"><input type="checkbox" name="topics" value="apps" /> Apps</label>
            <label className="flex min-h-11 items-center gap-2"><input type="checkbox" name="topics" value="security" /> Security</label>
          </div>
        </fieldset>
        <input name="disabledExample" value="omitted" disabled readOnly className="hidden" aria-hidden="true" />
        <input defaultValue="unnamed controls are omitted" className="hidden" aria-hidden="true" tabIndex={-1} />
        <button type="submit" disabled={submissionState === 'loading'} className="min-h-11 w-full rounded-lg bg-blue-600 px-4 font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 disabled:cursor-wait disabled:opacity-60">
          {submissionState === 'loading' ? 'Processing…' : 'Create account'}
        </button>
      </form>
      <section aria-label="Submission result" className="rounded-lg bg-[var(--bg-base)] p-4">
        <h3 className="font-semibold text-[var(--text-primary)]">Live result</h3>
        <p role="status" aria-live="polite" className={`mt-3 leading-relaxed ${submissionState === 'error' ? 'text-rose-400' : submissionState === 'success' ? 'text-emerald-400' : 'text-[var(--text-secondary)]'}`}>
          {message}
        </p>
        <p className="mt-4 text-xs text-[var(--text-muted)]">
          React renders the message as text. HTML-looking usernames remain visible characters and cannot create elements.
        </p>
      </section>
    </div>
  );
}
