"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Submission failed")

      setFormState("success")

      setTimeout(() => {
        setFormState("idle")
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    } catch (error) {
      setFormState("error")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out. I’ll get back to you soon.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-2xl p-8 space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className="w-full px-4 py-3 rounded-xl bg-input border border-border resize-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={formState === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  )
}
