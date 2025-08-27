
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				surface: 'hsl(var(--surface))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				'surface-glass': 'hsl(var(--surface-glass))',
				
				foreground: 'hsl(var(--foreground))',
				'foreground-muted': 'hsl(var(--foreground-muted))',
				'foreground-subtle': 'hsl(var(--foreground-subtle))',
				
				brand: {
					primary: 'hsl(var(--brand-primary))',
					secondary: 'hsl(var(--brand-secondary))',
					accent: 'hsl(var(--brand-accent))',
				},
				
				interactive: {
					primary: 'hsl(var(--interactive-primary))',
					'primary-hover': 'hsl(var(--interactive-primary-hover))',
					secondary: 'hsl(var(--interactive-secondary))',
					'secondary-hover': 'hsl(var(--interactive-secondary-hover))',
				},
				
				border: 'hsl(var(--border))',
				'border-elevated': 'hsl(var(--border-elevated))',
				
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				error: 'hsl(var(--error))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
