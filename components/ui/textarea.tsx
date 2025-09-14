import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-button border border-gray-300 bg-white px-4 py-3 text-body text-gray-dark placeholder:text-gray-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-vertical",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
