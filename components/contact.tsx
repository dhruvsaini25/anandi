"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Send, Mail, Phone, MapPin, Upload } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [fileName, setFileName] = useState("")
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }
    // Handle file attachment (convert to base64 so we can send in JSON)
    const file = formData.get('file') as File | null
    if (file && file.size) {
      const arrayBuffer = await file.arrayBuffer()
      const base64 = arrayBufferToBase64(arrayBuffer)
      Object.assign(data, {
        attachments: [
          {
            filename: file.name,
            content: base64,
            type: file.type || 'application/octet-stream',
          },
        ],
      })
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json()
      if (res.ok && body.ok) {
        setStatus('success')
        form.reset()
        setFileName('')
        setErrorMsg(null)
        if (body.previewUrl) {
          setErrorMsg(`Preview message: ${body.previewUrl}`)
        }
      } else {
        setStatus('error')
        setErrorMsg(body.error || 'Unknown error')
      }
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMsg(err.message || 'Network error')
    }

    // reset status after a short delay so button text can revert
    setTimeout(() => setStatus('idle'), 4000)
  }

  // Helper: convert ArrayBuffer to base64 in chunks to avoid call stack limits
  function arrayBufferToBase64(buffer: ArrayBuffer) {
    const bytes = new Uint8Array(buffer)
    const chunkSize = 0x8000 // 32KB
    let binary = ''
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize)
      binary += String.fromCharCode.apply(null, Array.from(chunk) as unknown as number[])
    }
    return btoa(binary)
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Get in Touch
              </p>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {"Let\u2019s Create"}
                <br />
                <span className="text-primary">Something Great</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Have a project in mind? I&apos;d love to hear about it. Drop me
                a message and let&apos;s start the conversation.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">
                    anandibhutani0@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Follow Me
              </p>
              <div className="flex gap-3">
                {["Instagram", "Behance", "LinkedIn", "Dribbble"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    // extensions like "minemail" add random attributes/styles which
                    // trigger hydration mismatches. React will ignore differences
                    // when this warning flag is set.
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-card-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">
                  Attach a Brief (optional)
                </label>
                <label
                  htmlFor="file-upload"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Upload className="h-4 w-4" />
                  {fileName || "Click to upload a file"}
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    className="sr-only"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "")
                    }
                    accept=".pdf,.doc,.docx,.png,.jpg"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : status === 'error' ? (
                  'Error Sending'
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === 'error' && errorMsg && (
                <p className="mt-2 text-sm text-destructive">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
