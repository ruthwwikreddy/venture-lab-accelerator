import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cva } from "class-variance-authority"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const iconVariants = cva("", {
  variants: {
    collapsed: {
      true: "h-6 w-6",
      false: "h-5 w-5",
    },
  },
})

interface SidebarProps {
  children?: React.ReactNode
  className?: string
  collapsed?: boolean
  showSearch?: boolean
  showMobileMenu?: boolean
  title?: string
  navItems?: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
  actions?: {
    title: string
    icon: LucideIcon
    variant: "default" | "ghost"
    onClick?: () => void
  }[]
  headerActions?: {
    title: string
    icon: LucideIcon
    onClick?: () => void
  }[]
  footerItems?: {
    title: string
    icon: LucideIcon
    onClick?: () => void
  }[]
}

export function Sidebar({
  children,
  className,
  collapsed = false,
  showSearch = true,
  showMobileMenu = true,
  title = "Navigation",
  navItems,
  actions,
  headerActions,
  footerItems,
}: SidebarProps) {
  const isMobile = useMobile()
  const [search, setSearch] = React.useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filteredNavItems = React.useMemo(() => {
    if (!search || !navItems) return navItems
    const searchLower = search.toLowerCase()
    return navItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.label?.toLowerCase().includes(searchLower)
    )
  }, [search, navItems])

  const filteredActions = React.useMemo(() => {
    if (!search || !actions) return actions
    const searchLower = search.toLowerCase()
    return actions.filter((item) =>
      item.title.toLowerCase().includes(searchLower)
    )
  }, [search, actions])

  if (isMobile && showMobileMenu) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-52 px-2 py-3">
          <div className="flex h-full flex-col gap-4">
            {headerActions ? (
              <div className="flex items-center gap-2">
                {headerActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Button
                      key={action.title}
                      variant="ghost"
                      size="icon"
                      onClick={action.onClick}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  )
                })}
              </div>
            ) : null}
            {showSearch ? (
              <Input
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
              />
            ) : null}
            <nav className="flex-1">
              <div className="flex flex-col gap-2">
                {filteredNavItems?.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.title}
                      variant={item.variant}
                      className="justify-start"
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {item.title}
                      {item.label ? (
                        <span className="ml-auto text-xs text-muted-foreground">
                          {item.label}
                        </span>
                      ) : null}
                    </Button>
                  )
                })}
              </div>
              {filteredActions?.length ? (
                <>
                  <Separator className="my-4" />
                  <div className="flex flex-col gap-2">
                    {filteredActions.map((item) => {
                      const Icon = item.icon
                      return (
                        <Button
                          key={item.title}
                          variant={item.variant}
                          className="justify-start"
                          onClick={item.onClick}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {item.title}
                        </Button>
                      )
                    })}
                  </div>
                </>
              ) : null}
            </nav>
            {footerItems ? (
              <div className="flex items-center gap-2">
                {footerItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.title}
                      variant="ghost"
                      size="icon"
                      onClick={item.onClick}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  )
                })}
              </div>
            ) : null}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <aside
      className={cn(
        "flex flex-col gap-4 px-2 py-3",
        collapsed ? "w-16" : "w-52",
        className
      )}
    >
      {headerActions ? (
        <div className="flex items-center gap-2">
          {headerActions.map((action) => {
            const Icon = action.icon
            return collapsed ? (
              <TooltipProvider key={action.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={action.onClick}
                    >
                      <Icon className={iconVariants({ collapsed })} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{action.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                key={action.title}
                variant="ghost"
                size="icon"
                onClick={action.onClick}
              >
                <Icon className={iconVariants({ collapsed })} />
              </Button>
            )
          })}
        </div>
      ) : null}
      {showSearch ? (
        collapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className={iconVariants({ collapsed })} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Search</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Input
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
        )
      ) : null}
      <nav className="flex-1">
        <div className="flex flex-col gap-2">
          {filteredNavItems?.map((item) => {
            const Icon = item.icon
            return collapsed ? (
              <TooltipProvider key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant={item.variant} size="icon">
                      <Icon className={iconVariants({ collapsed })} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                key={item.title}
                variant={item.variant}
                className="justify-start"
              >
                <Icon className={iconVariants({ collapsed })} />
                {!collapsed && (
                  <>
                    <span className="ml-2">{item.title}</span>
                    {item.label ? (
                      <span className="ml-auto text-xs text-muted-foreground">
                        {item.label}
                      </span>
                    ) : null}
                  </>
                )}
              </Button>
            )
          })}
        </div>
        {filteredActions?.length ? (
          <>
            <Separator className="my-4" />
            <div className="flex flex-col gap-2">
              {filteredActions.map((item) => {
                const Icon = item.icon
                return collapsed ? (
                  <TooltipProvider key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={item.variant}
                          size="icon"
                          onClick={item.onClick}
                        >
                          <Icon className={iconVariants({ collapsed })} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Button
                    key={item.title}
                    variant={item.variant}
                    className="justify-start"
                    onClick={item.onClick}
                  >
                    <Icon className={iconVariants({ collapsed })} />
                    {!collapsed && <span className="ml-2">{item.title}</span>}
                  </Button>
                )
              })}
            </div>
          </>
        ) : null}
      </nav>
      {footerItems ? (
        <div className="flex items-center gap-2">
          {footerItems.map((item) => {
            const Icon = item.icon
            return collapsed ? (
              <TooltipProvider key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={item.onClick}
                    >
                      <Icon className={iconVariants({ collapsed })} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                key={item.title}
                variant="ghost"
                size="icon"
                onClick={item.onClick}
              >
                <Icon className={iconVariants({ collapsed })} />
              </Button>
            )
          })}
        </div>
      ) : null}
    </aside>
  )
}