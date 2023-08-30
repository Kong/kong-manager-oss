// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;

export interface Info {
  configuration?: {
    database?: string;
    node?: {
      hostname?: string;
      lua_version?: string;
      tagline?: string;
      version?: string;
    };
    role?: 'traditional' | 'control_plane' | 'data_plane'
  } & AnyObject;
  license?: AnyObject;
  version?: string;
  timers?: AnyObject;
  plugins?: AnyObject;
  hostname?: string;
  tagline?: string;
  lua_version?: string;
}
