const menu = (language) => {
  if (language == "en") {
    return `
        Hello, Thankyou for reaching out to Vivi Waters, 
    Kindly select which Product you want to Order. For Ordering simply input the  
    
    Product Number :
    
    1) ViVi Drop – 200ml 
    Was SAR 16.10 Now SAR 11.50 
    Carton – 32 Pcs 
    Buy 10 Get 4 Free 
    
    2) ViVi – 200ml 
    Was SAR 21.28 Now SAR 15.90 
    Carton – 48 Pcs 
    Buy 10 Get 4 Free 
    
    3) ViVi – 200ml 
    Was SAR 20.20 Now SAR 15.45 
    Shrink – 48 Pcs 
    Buy 10 Get 4 Free 
    
    4) ViVi – 200ml 
    Was SAR 10.00 Now SAR 7.50 
    Shrink – 20 Pcs 
    Buy 10 Get 4 Free 
    
    5) ViVi – 330ml 
    Was SAR 15.00 Now SAR 10.55 
    Shrink – 24 pcs 
    Buy 10 Get 4 Free 
    
    6) ViVi – 330ml 
    Was SAR 21.28 Now SAR 15.90 
    Carton – 40 Pcs 
    Buy 10 Get 4 Free 
    
    7) ViVi – 330ml 
    Was SAR 20.20 Now SAR 15.45 
    Shrink – 40 Pcs 
    Buy 10 Get 4 Free 
    
    8) ViVi – 600ml 
    Was SAR 18.00 Now SAR 14.65 
    Carton 24 Pcs 
    Buy 10 Get 4 Free 
    
    9) ViVi – 1.5ltr 
    Was SAR 11.50 Now SAR 8.40 
    Shrink – 6 Pcs 
    Buy 10 Get 4 Free
        `;
  } else if (language == "ar") {
    return `
        مرحبًا، شكرًا لتواصلك مع فيفي ووترز، 

يرجى اختيار المنتج الذي تريد طلبه. للطلب ببساطة قم بإدخال 

رقم المنتج
  
1) فيفي دروب – 200 مل 

كان 16.10 ريال سعودي الآن 11.50 ريال سعودي 

كرتون – 32 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

2) فيفي – 200 مل 

كان 21.28 ريال سعودي الآن 15.90 ريال سعودي 

كرتون – 48 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

3) فيفي – 200 مل 

كان 20.20 ريال سعودي الآن 15.45 ريال سعودي 

شرينك - 48 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

4) فيفي – 200 مل 

كان 10.00 ريال سعودي الآن 7.50 ريال سعودي 

شرينك – 20 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

5) فيفي – 330 مل 

كان 15.00 ريال سعودي الآن 10.55 ريال سعودي 

يتقلص - 24 جهاز كمبيوتر شخصى 

اشتري 10 واحصل على 4 مجانًا 

  

6) فيفي – 330 مل 

كان 21.28 ريال سعودي الآن 15.90 ريال سعودي 

كرتون – 40 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

7) فيفي – 330 مل 

كان 20.20 ريال سعودي الآن 15.45 ريال سعودي 

شرينك – 40 قطعة 

اشتري 10 واحصل على 4 مجانًا 

  

8) فيفي – 600 مل 

كان 18.00 ريال سعودي الآن 14.65 ريال سعودي 

كرتونة 24 قطعة 

اشتري 10 واحصل على 4 مجانًا 

 

9) فيفي – 1.5 لتر  

كان 11.50 ريال سعودي الآن 8.40 ريال سعودي 

شرينك - 6 قطع 

اشتري 10 واحصل على 4 مجانًا
        `;
  } else {
    return "Please enter 'en' for English and 'ar' for Arabic";
  }
};

module.exports = menu;
