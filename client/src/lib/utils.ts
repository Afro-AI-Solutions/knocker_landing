import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Merge API content into admin defaults without dropping nested fields. */
export function deepMerge<T>(defaults: T, override: unknown): T {
  if (override === undefined || override === null) {
    return defaults
  }

  if (Array.isArray(defaults)) {
    if (!Array.isArray(override) || override.length === 0) {
      return defaults
    }
    const template = (defaults[0] ?? {}) as Record<string, unknown>
    return override.map((item) =>
      typeof item === "object" && item !== null
        ? deepMerge(template, item)
        : item,
    ) as T
  }

  if (typeof defaults !== "object" || defaults === null) {
    return override as T
  }

  const result = { ...(defaults as Record<string, unknown>) }
  if (typeof override === "object" && !Array.isArray(override)) {
    for (const key of Object.keys(override as Record<string, unknown>)) {
      const defaultVal = (defaults as Record<string, unknown>)[key]
      const overrideVal = (override as Record<string, unknown>)[key]
      result[key] =
        defaultVal !== undefined
          ? deepMerge(defaultVal, overrideVal)
          : overrideVal
    }
  }

  return result as T
}

export function normalizeHomeTechStack<T extends { techStack?: { technologies?: unknown[] } }>(
  content: T,
): T {
  const technologies = content.techStack?.technologies
  if (!technologies?.length) {
    return content
  }

  if (typeof technologies[0] === "object" && technologies[0] !== null && "name" in technologies[0]) {
    return {
      ...content,
      techStack: {
        ...content.techStack!,
        technologies: technologies.map((t) =>
          typeof t === "string" ? t : (t as { name: string }).name,
        ),
      },
    }
  }

  return content
}

