export type QiitaUser = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
};

export interface FetchQiitaUser {
  (accessToken: string): Promise<QiitaUser>;
}
