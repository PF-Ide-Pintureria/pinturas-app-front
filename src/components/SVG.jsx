import React from 'react'

function UserIcon() {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 42 42"
    //   fill="none"
    // >
    //   <path
    //     d="M21 0C14.3726 0 9 5.37258 9 12V22H33V12C33 5.37258 27.6274 0 21 0ZM21 26C13.783 26 6.98562 27.822 1.04864 31.0326L0 31.5996V42H42V31.5996L40.9514 31.0326C35.0144 27.822 28.217 26 21 26Z"
    //     fill="black"
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg>
  )
};

function Cart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%" height="100%"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      id="shopping-cart"
    >
      <path d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z"></path>
    </svg>
  )
};

export {
  UserIcon,
  Cart
}