/*
TradeApp - A web application for your 
investing ideas
----------------------------------------------------
Author: Andrei Nakagawa
----------------------------------------------------
Description: Defines a transaction
A transaction indicates an order (buy or sell) passed
to the exchange. It is composed by fields that 
indicate the type of order, the amount of shares
desired price and so on.
----------------------------------------------------
*/

//Class: Transaction
//Defines an order passed to an exchange
//Used for composing a portfolio
export class Transaction {
  id: number; //id number --> primary key
  ticker: string; //ticker --> id in the exchange
  order_type: string; //either buy or sell
  order_date: Date; //order date
  order_quantity: number; //number of shares bought or sold
  order_price_desired: number; //desired price
  order_completed: boolean; //whether transaction was completed
  order_price_completed: number; //actual price of the transaction 

  //default constructor being used for preliminary tests
  constructor() {
    this.id = 1;
    this.ticker = "PETR4";
    this.order_date = new Date();
    this.order_date.setFullYear(2019);
    this.order_date.setMonth(3);
    this.order_date.setDate(15);
    this.order_type = 'sell'
    this.order_quantity = 10;
    this.order_completed = false;
    this.order_price_desired = 18.9;
    this.order_price_completed = -1;
  }
}