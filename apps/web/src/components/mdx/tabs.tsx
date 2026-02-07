"use client";

import { createContext, useContext, useState, ReactNode, useId } from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="my-6">{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  children: ReactNode;
}

export function TabList({ children }: TabListProps) {
  return (
    <div className="flex border-b border-white/10 overflow-x-auto">
      {children}
    </div>
  );
}

interface TabTriggerProps {
  value: string;
  children: ReactNode;
}

export function TabTrigger({ value, children }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;
  const id = useId();

  return (
    <button
      id={`tab-${id}-${value}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}-${value}`}
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px",
        isActive
          ? "text-blue-400 border-blue-400"
          : "text-slate-400 border-transparent hover:text-slate-200"
      )}
    >
      {children}
    </button>
  );
}

interface TabContentProps {
  value: string;
  children: ReactNode;
}

export function TabContent({ value, children }: TabContentProps) {
  const { activeTab } = useTabsContext();
  const id = useId();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      id={`panel-${id}-${value}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}-${value}`}
      className="pt-4"
    >
      {children}
    </div>
  );
}
