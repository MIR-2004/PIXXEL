"use client"

import Link from "next/link"
import { useEffect, useMemo, useState, useCallback } from "react"

export default function GlassNavigation() {
	const [active, setActive] = useState("home")

	const handleClick = useCallback((id) => {
		setActive(id)
		const el = document.getElementById(id)
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
	}, [])

	useEffect(() => {
		const sections = ["home", "features", "pricing", "contact"]
		const observers = sections.map((id) => {
			const el = document.getElementById(id)
			if (!el) return null
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActive(id)
				},
				{ root: null, threshold: 0.4 }
			)
			observer.observe(el)
			return observer
		})
		return () => observers.forEach((o) => o?.disconnect())
	}, [])

	const linkClass = useMemo(
		() =>
			"px-4 py-2 rounded-full transition-all text-sm md:text-base duration-300 hover:text-cyan-400",
		[]
	)

	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
			<div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-4 md:px-6 py-2 flex items-center gap-4">
				<button onClick={() => handleClick("home")} className={`${linkClass} ${active === "home" ? "text-cyan-300" : "text-white/90"}`}>Home</button>
				<button onClick={() => handleClick("features")} className={`${linkClass} ${active === "features" ? "text-cyan-300" : "text-white/90"}`}>Features</button>
				<button onClick={() => handleClick("pricing")} className={`${linkClass} ${active === "pricing" ? "text-cyan-300" : "text-white/90"}`}>Pricing</button>
				<Link href="/" className="hidden md:block text-white/60">|</Link>
				<a href="#contact" onClick={(e) => { e.preventDefault(); handleClick("contact") }} className={`${linkClass} ${active === "contact" ? "text-cyan-300" : "text-white/90"}`}>Contact</a>
			</div>
		</nav>
	)
}

