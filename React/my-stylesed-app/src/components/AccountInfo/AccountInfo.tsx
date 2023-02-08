import { AccountInfoContainer } from "./AccountInfo.styled";

export const AccountInfo = ({ children }: any) => {
  const { account } = children.props;

  return (
    <AccountInfoContainer>
      <p>{account.name}</p>
      <p>{account.birthdate.toLocaleString()}</p>
    </AccountInfoContainer>
  );
};
