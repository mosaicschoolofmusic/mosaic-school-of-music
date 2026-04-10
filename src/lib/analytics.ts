import { supabase } from './supabase';

export interface AnalyticsEventData {
  event_type: 'form_view' | 'form_submit' | 'form_success';
  page_path?: string;
  mode?: 'online' | 'home-tuition';
  user_session_id?: string;
}

/**
 * Send an analytics event to Supabase
 * Non-blocking: errors are logged but don't throw
 */
export async function trackEvent(data: AnalyticsEventData): Promise<void> {
  try {
    const eventPayload = {
      event_type: data.event_type,
      page_path: data.page_path || (typeof window !== 'undefined' ? window.location.pathname : ''),
      mode: data.mode || null,
      user_session_id: data.user_session_id || null,
      timestamp: new Date().toISOString(),
    };

    const { error } = await supabase.from('analytics_events').insert([eventPayload]);

    if (error) {
      console.warn('[Analytics] Failed to track event:', error.message);
    }
  } catch (err) {
    // Silently fail — analytics should never break the user experience
    console.warn('[Analytics] Error tracking event:', err);
  }
}

/**
 * Get or create a session ID for this user (stored in sessionStorage)
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  const key = '__mosaic_session_id';
  let sessionId = sessionStorage.getItem(key);

  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem(key, sessionId);
  }

  return sessionId;
}
