import * as React from "react"
import { useToast } from "../../hooks/use-toast"
import { Toaster as ShadcnToaster } from "../../components/ui/toaster"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../../components/ui/toast"

export function Toaster() {
    return <ShadcnToaster />
}
