import { formatCurrency,getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeKuwait from '@angular/common/locales/ku';

import localeBahrain from '@angular/common/locales/ar-BH';
import localeSaudia from '@angular/common/locales/ar-SA';
import localeQatar from '@angular/common/locales/ar-QA';
import localeUAE from '@angular/common/locales/ar-AE';


enum Currency {Kuwait='KWD',UAE='AED',Bahrain='BHD',KSA='SAR',Qatar='QAR'};

////currency pipe
@Pipe({
  name: 'currencyDecimalPoints'
})
export class CurrencyDecimalPointsPipe implements PipeTransform {
  // local:string='ku';
  transform(price:number, currency1:string,country_code:string):any{
    if(currency1===Currency.Kuwait){
      // registerLocaleData(this.pat,this.local);
      registerLocaleData(localeKuwait, 'ku');
      return formatCurrency(price,'ku',getCurrencySymbol(Currency.Kuwait, 'wide'),Currency.Kuwait,'3.0-3');
    }
    if(currency1===Currency.Bahrain){
      registerLocaleData(localeBahrain, 'ar-BH');
      return formatCurrency(price,'ar-BH',getCurrencySymbol(Currency.Bahrain, 'wide'),Currency.Bahrain,'3.0-2'); 
    }
    if(currency1===Currency.KSA){
      registerLocaleData(localeSaudia, 'ar-SA');
      return formatCurrency(price,'ar-SA',getCurrencySymbol(Currency.KSA, 'wide'),Currency.KSA,'3.0-2'); 
    }
    if(currency1===Currency.UAE){
      registerLocaleData(localeUAE, 'ar-AE');
      return formatCurrency(price,'ar-AE',getCurrencySymbol(Currency.UAE, 'wide'),Currency.UAE,'3.0-2'); 
    }
    if(currency1===Currency.Qatar){
      registerLocaleData(localeQatar, 'ar-QA');
      return formatCurrency(price,'ar-QA',getCurrencySymbol(Currency.Qatar, 'wide'),Currency.Qatar,'3.0-2');  
    }
  }
}

