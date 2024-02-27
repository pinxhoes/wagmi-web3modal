import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"
import { useWeb3Modal } from "@web3modal/wagmi/react"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-white rounded-20px whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50;",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "shadow hover:bg-primary/90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },

)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isGradient = variant === 'gradient';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        style={{
          ...isGradient ? { backgroundImage: 'linear-gradient(to top left,#536976,#292E49)' } : {},
          borderRadius: '20px',
        }}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export function WalletButton() {
  const { open, close } = useWeb3Modal()
  return (
    <Button className="m-5" variant="gradient" onClick={() => open()}>Connect Wallet</Button>
  )
}
export function NetworkButton() {
  const { open, close } = useWeb3Modal()
  return (
    <Button variant="gradient" onClick={() => open({ view: 'Networks' })}>Choose Network</Button>
  )
}

