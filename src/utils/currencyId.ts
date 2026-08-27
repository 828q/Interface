import { Currency, ETHER, Token } from '@raptordex/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'RPTR'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
