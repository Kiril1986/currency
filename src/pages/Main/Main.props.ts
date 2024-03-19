
export type Data = {
    bpi: CurrencyTuple[]
}

export type CurrencyTuple = 
   [string, CurrencyType]


export type CurrencyType = {
    code: string,
    description: string,
    rate: string,
    rate_float: number,
    symbol: string,
    }

export type Error = {
    message: string
}