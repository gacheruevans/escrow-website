export const shortenAddress = (address: string | any[]) =>
  address.length > 0
    ? `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
    : '';
