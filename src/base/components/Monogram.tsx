function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 2.6 35.6 11.3v17.4L20 37.4 4.4 28.7V11.3L20 2.6Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.6 13.4v13.2M25.4 13.4v13.2M14.6 20h10.8"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Monogram
