import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { profile, sectionCopy } from '../../data/portfolio'

const initialForm = { name: '', email: '', subject: '', message: '' }

function buildMessage(form) {
  return [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    form.subject ? `Subject: ${form.subject}` : null,
    '',
    form.message,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

function emailUrl(form) {
  const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
  const body = encodeURIComponent(buildMessage(form))
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

function gmailUrl(form) {
  const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
  const body = encodeURIComponent(buildMessage(form))
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${subject}&body=${body}`
}

function openMailComposer(form) {
  const tab = window.open(gmailUrl(form), '_blank', 'noopener,noreferrer')
  if (!tab) {
    window.location.href = emailUrl(form)
  }
}

function whatsappUrl(form) {
  const number = String(profile.whatsapp || '').replace(/\D/g, '')
  const text = encodeURIComponent(buildMessage(form))
  return `https://wa.me/${number}?text=${text}`
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const formEl = e.currentTarget.closest('form')
    if (!formEl.checkValidity()) {
      formEl.reportValidity()
      return
    }
    openMailComposer(form)
    setForm(initialForm)
  }

  const sendWhatsApp = (e) => {
    e.preventDefault()
    const formEl = e.currentTarget.closest('form')
    if (!formEl.reportValidity()) return
    window.open(whatsappUrl(form), '_blank', 'noopener,noreferrer')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="scroll-mt-4">
      <SectionHeader title="Get In Touch" description={sectionCopy.contact} />

      <div className="rounded-lg bg-card p-6 shadow-sm md:p-10">
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text transition-colors hover:border-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text">
              <Icon name="mail" />
            </span>
            <span>
              <span className="block text-xs text-muted">Email</span>
              {profile.email}
            </span>
          </a>
          <a
            href={`https://wa.me/${String(profile.whatsapp).replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text transition-colors hover:border-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text">
              <Icon name="whatsapp" />
            </span>
            <span>
              <span className="block text-xs text-muted">WhatsApp</span>
              +92 304 4702367
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text transition-colors hover:border-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text">
              <Icon name="linkedin" />
            </span>
            <span>
              <span className="block text-xs text-muted">LinkedIn</span>
              malikmuzammilawan
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text transition-colors hover:border-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text">
              <Icon name="github" />
            </span>
            <span>
              <span className="block text-xs text-muted">GitHub</span>
              MuzmilAwan
            </span>
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-text">
                Your Full Name ( Required )
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded border border-transparent bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-text">
                Your Email ( Required )
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border border-transparent bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-text">
              Your Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded border border-transparent bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
              placeholder="Your Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-text">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded border border-transparent bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
              placeholder="Your Message"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
           
            <button
              type="button"
              onClick={sendEmail}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded border border-accent px-6 py-3 text-sm font-medium text-text transition-opacity hover:opacity-90"
            >
              <Icon name="mail" />
              EMAIL
            </button>
            <button
              type="button"
              onClick={sendWhatsApp}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded border border-accent px-6 py-3 text-sm font-medium text-text transition-opacity hover:opacity-90"
            >
              <Icon name="whatsapp" />
              WHATSAPP
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
