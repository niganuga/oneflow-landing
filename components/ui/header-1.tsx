'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

const TEAL = "#3ee8c8";

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Products', href: '#products' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About', href: '#about' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
                'bg-[#0a0a0b]/90 supports-[backdrop-filter]:bg-[#0a0a0b]/70 border-white/10 backdrop-blur-lg':
                    scrolled,
            })}
        >
            <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
                <a href="/" className="rounded-md p-2 text-[15px] font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
                    One Flow
                </a>
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#early-access"
                        className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
                    >
                        Sign In
                    </a>
                    <a
                        href="#early-access"
                        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black transition-colors hover:opacity-90"
                        style={{ background: TEAL }}
                    >
                        Get Started
                    </a>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </button>
            </nav>
            <MobileMenu open={open} className="flex flex-col justify-between gap-2">
                <div className="grid gap-y-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <a
                        href="#early-access"
                        className="flex h-10 items-center justify-center rounded-md border border-white/15 text-sm font-medium text-white"
                    >
                        Sign In
                    </a>
                    <a
                        href="#early-access"
                        className="flex h-10 items-center justify-center rounded-md text-sm font-medium text-black"
                        style={{ background: TEAL }}
                    >
                        Get Started
                    </a>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                'bg-[#0a0a0b]/95 supports-[backdrop-filter]:bg-[#0a0a0b]/80 backdrop-blur-lg',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-white/10 md:hidden',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
                    'size-full p-4',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}
