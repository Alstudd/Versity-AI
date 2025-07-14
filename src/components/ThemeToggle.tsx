import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Icon color: text-white in dark, text-foreground in light
  const iconClass =
    theme === "dark"
      ? "w-4 h-4 theme-toggle-icon text-white"
      : "w-4 h-4 theme-toggle-icon text-foreground";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 hover:bg-muted/50 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className={iconClass} />
      ) : (
        <Moon className={iconClass} />
      )}
    </Button>
  );
};

export default ThemeToggle; 