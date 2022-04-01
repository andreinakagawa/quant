/*
TradeApp - A web application for your 
investing ideas
----------------------------------------------------
Author: Andrei Nakagawa
----------------------------------------------------
Description: Defines a portfolio of assets
----------------------------------------------------
*/

import internal from "stream";
import { Transaction } from "./transactions";

export class Portfolio {
  id: number; //id -> primary key
  name: string; //name of the portfolio
  //description can be used for describing the goal of the portfolio
  //how it was built, etc.
  description: string; 
  //array for storing all transactions related to a given portfolio
  transactions : Transaction[]; 
  
  //constructor being used for preliminary tests
  constructor(inId:number, inName: string, inDesc:string){
    this.id = inId;
    this.name = inName;
    this.description = inDesc;
    this.transactions = [];
    //let's add two transactions (taken from default constructor)
    this.transactions.push(new Transaction()); //first 
    this.transactions.push(new Transaction()); //second
    //transactions are the same, but it doesn't matter right now
  }
}