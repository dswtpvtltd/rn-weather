export type RootStackParamList = {
  Home: undefined;
  Weather:
    | {
        latitude?: number;
        longitude?: number;
      }
    | undefined;
};
