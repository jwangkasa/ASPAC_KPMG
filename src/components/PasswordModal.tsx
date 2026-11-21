import React, { useState, useEffect, useRef } from 'react'

interface Props {
  onUnlock: () => void
}

export default function PasswordModal({ onUnlock }: Props) {
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === 'ASCEND_2026!') {
      setError(false)
      onUnlock()
    } else {
      setError(true)
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(4, 10, 32, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '430px',
          background: 'rgba(8, 16, 48, 0.92)',
          border: '1px solid rgba(201, 162, 75, 0.45)',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(201, 162, 75, 0.2)',
          borderRadius: '16px',
          padding: '2.25rem 2rem',
          color: '#ffffff',
          textAlign: 'center',
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#c9a24b',
            background: 'rgba(201, 162, 75, 0.12)',
            border: '1px solid rgba(201, 162, 75, 0.35)',
            padding: '0.35rem 0.95rem',
            borderRadius: '9999px',
            marginBottom: '1.25rem',
          }}
        >
          KPMG × SAP · Tokyo 2026
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '1.85rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
            color: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          ASPAC Leadership Summit
        </h2>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#a3b3d9',
            marginBottom: '1.75rem',
            lineHeight: 1.45,
          }}
        >
          This presentation is restricted. Please enter the passcode to access the deck.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div style={{ position: 'relative', textAlign: 'left' }}>
            <input
              ref={inputRef}
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value)
                if (error) setError(false)
              }}
              placeholder="Enter passcode"
              autoFocus
              style={{
                width: '100%',
                boxSizing: 'border-box',
                background: 'rgba(4, 9, 30, 0.85)',
                border: error ? '1px solid #ff6b6b' : '1px solid rgba(163, 179, 217, 0.35)',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
                fontSize: '1rem',
                color: '#ffffff',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
            />
          </div>
          {error && (
            <div style={{ color: '#ff6b6b', fontSize: '0.825rem', fontWeight: 500, textAlign: 'left' }}>
              Incorrect passcode. Please try again.
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #c9a24b 0%, #b89138 100%)',
              color: '#060d2b',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif",
              boxShadow: '0 4px 16px rgba(201, 162, 75, 0.4)',
              transition: 'transform 0.1s, background 0.2s',
            }}
          >
            Unlock Presentation
          </button>
        </form>
        <div style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#6d7f9e', letterSpacing: '0.03em' }}>
          Tokyo, 26–29 October 2026 · Confidential
        </div>
      </div>
    </div>
  )
}
