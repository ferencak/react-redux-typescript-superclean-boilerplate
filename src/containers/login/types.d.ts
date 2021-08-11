type ILoginStateProps = {
  loading: boolean;
  errorMessage: string;
};

type ILoginDispatchProps = {
  dispatchLoginAction: (username: string, password: string) => void;
};

export type ILoginProps = ILoginDispatchProps & ILoginStateProps;
