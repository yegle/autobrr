interface Filter {
  id: number;
  name: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
  min_size: string;
  max_size: string;
  delay: number;
  priority: number;
  match_releases: string;
  except_releases: string;
  use_regex: boolean;
  match_release_groups: string;
  except_release_groups: string;
  scene: boolean;
  origins: string;
  freeleech: boolean;
  freeleech_percent: string;
  shows: string;
  seasons: string;
  episodes: string;
  resolutions: string[];
  codecs: string[];
  sources: string[];
  containers: string[];
  match_hdr: string[];
  except_hdr: string[];
  years: string;
  artists: string;
  albums: string;
  match_release_types: string[];
  except_release_types: string[];
  formats: string[];
  quality: string[];
  media: string[];
  perfect_flac: boolean;
  cue: boolean;
  log: boolean;
  log_score: string;
  match_categories: string;
  except_categories: string;
  match_uploaders: string;
  except_uploaders: string;
  tags: string;
  except_tags: string;
  tags_any: string;
  except_tags_any: string;
  actions: Action[];
  indexers: Indexer[];
}

interface Action {
  id: number;
  name: string;
  type: ActionType;
  enabled: boolean;
  exec_cmd?: string;
  exec_args?: string;
  watch_folder?: string;
  category?: string;
  tags?: string;
  label?: string;
  save_path?: string;
  paused?: boolean;
  ignore_rules?: boolean;
  limit_upload_speed?: number;
  limit_download_speed?: number;
  webhook_host: string,
  webhook_type: string;
  webhook_method: string;
  webhook_data: string,
  webhook_headers: string[];
  filter_id?: number;
  client_id?: number;
}

type ActionType = 'TEST' | 'EXEC' | 'WATCH_FOLDER' | 'WEBHOOK' | DownloadClientType;
