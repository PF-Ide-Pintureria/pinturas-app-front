import React from 'react'

export default function DebuggerFooter ({ cart }) {
  return (
        <footer className="debuggerFooter">
            <span>
                {
                    '[Cart]: ' + JSON.stringify(cart)
                }
            </span>
        </footer>
  )
}
