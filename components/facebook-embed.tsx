"use client"

import { useEffect } from "react"

export default function FacebookEmbed() {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse()
    } else {
      const script = document.createElement("script")
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="flex justify-center">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/Skool.Of.Rockk"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </div>
  )
}
