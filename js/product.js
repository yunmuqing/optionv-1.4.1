ymq_define("Product",["jquery","Config","Cart","Html","Variant","Validate","Upload","jedate","dropdown","colpick"],(function(t,i,o,n,a,e,r,c){return class o{constructor(){var t=this;t.initConfig(),t.instance=null,t.variant=a.getInstance(),t.htmlBuilder=n.getInstance(),t.validate=e.getInstance(),t.upload=r.getInstance(),t.init()}initMemberVariables(){var t=this;t.variantJson={},t.scriptArr=[],t.quantityDomInited=!1,t.conditionArr=[],t.formData={},t.selectedValue={},t.ymq_condition={},t.ymq_total_price=0,t.ymq_total_price_single=0,t.ymq_option_price=0,t.ymq_option_price_single=0,t.quantityback=0,t.ogFormData=new FormData,t.needchange=!0,t.paymentButtonDom=""}init(){this.initMemberVariables(),this.buildStyle().buildUploadModalDom().isShowBuyItNow().hideShopifyDomAndRegisterAddCartEvent().disabledJqEvent().getShopifySelectDom().buildShopifyDom().buildYmqDom().buildVariantConditionName().buildQuantityDom().hidePaymentButton().buildShowAddTotalPriceInfoDom().buildAddToCartDom().disabledSubmit().registerDeleteFileViewEvent().registerInputChangeEvent().buildFormData()}doIsShowBuyItNow(t){var i=this;try{Object.keys(t).forEach((function(o){var n=t[o];if(i.config.hideByNow)throw new Error("breakForEach");if([12,6,7,8,16].includes(Number(n.type)))console.log(1,n),i.config.hideByNow=!0;else if([18,19].includes(Number(n.type))&&window.ymq_option.ymq_option_branding.extra.plan>2)console.log(2,n),i.config.hideByNow=!0;else if([3,4,5,6,7,8,15,16].includes(Number(n.type)))for(var a in n.options){var e=n.options[a];Number(e.price)>0&&(console.log(3,n),i.config.hideByNow=!0),window.ymq_option.ymq_option_branding.extra.plan>1&&(Number(e.weight)>0&&(console.log(4,n),i.config.hideByNow=!0),null!=e.sku&&""!=e.sku&&(console.log(5,n),i.config.hideByNow=!0))}else Number(n.price)>0&&(console.log(6,n),i.config.hideByNow=!0),window.ymq_option.ymq_option_branding.extra.plan>1&&(Number(n.weight)>0&&(console.log(7,n),i.config.hideByNow=!0),null!=n.sku&&""!=n.sku&&(console.log(8,n),i.config.hideByNow=!0))}))}catch(t){if("breakForEach"!=t.message)throw t}}isShowBuyItNow(){var i=this;i.config.hideByNow=!1;var o=t(i.config.form_box).find("[name='id']");if(0==Number(o.length))return console.log(1),i.config.hideByNow=!0,i;if(0==Number(i.config.util.getValue(i.config.ymq_option_branding.extra,"bunow","0")))return console.log(1.1),i.config.hideByNow=!0,i;if(i.doIsShowBuyItNow(i.config.ymq_option_data),0==i.config.hideByNow)try{Object.keys(i.config.ymq_option_template).forEach((function(t){var o=i.config.ymq_option_template[t];if(i.config.hideByNow)throw new Error("breakForEach");i.doIsShowBuyItNow(o)}))}catch(t){if("breakForEach"!=t.message)throw t}return console.log(i.config.hideByNow,21321312),i}registerDeleteFileViewEvent(){var i=this;return t(document).on("click",".ymq_upload_file_item_del",(function(){var o=t(this),n=o.data("name"),a=o.data("num");i.upload.fileData.hasOwnProperty(n)&&i.upload.fileData[n].hasOwnProperty(a)&&delete i.upload.fileData[n][a],o.parents(".ymq-options-box").find('input[type="file"]').change().parents(".ymq_upload_new").removeClass("ymq_disabled"),o.parents(".ymq_upload_file_item").fadeOut().remove()})),i}buildUploadModalDom(){return this}de(i,o,n,a,e){if(i){var r={};if(ymq.$&&(r=ymq.$._data(i))&&r.events&&r.events[o])for(var c=0;c<r.events[o].length;c+=1)r.events[o][c].namespace!=a&&""!=a||(r.events[o][c].handler=function(){});if((r=t._data(i))&&r.events&&r.events[o])for(c=0;c<r.events[o].length;c+=1)r.events[o][c].namespace!=a&&""!=a||(r.events[o][c].handler=function(){})}}disabledJqEvent(){var t=this;return t.intervalResult(1e4,100,(function(){return window.$&&$.fn&&$.fn.jquery?ymq.$=$:window.jQuery&&jQuery.fn&&jQuery.fn.jquery&&(ymq.$=jQuery),ymq.$?(t.buildQuantityDom(),console.log("shopify jq"),t.doAddCart(),!0):"complete"==document.readyState})),t}intervalResult(t,i,o,n){"function"==typeof t?(n=i,o=t,i=1e3,t=20):"function"==typeof i&&(n=o,o=i,i=1e3),"function"!=typeof o&&(o=function(){return!1});var a=0,e=setInterval((function(){++a>t||o(a)?clearInterval(e):"function"==typeof n&&n()}),i)}doAddCart(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"cart-ajax","0");if(1==Number(o))return!1;var n=t(i.config.form_box);i.I.each((function(t,o){i.de(o,"click","namespace","","disable")})),i.I.on("click.ymq",(function(o){if(i.buildFormData(),i.validate.validateAll(i.formData,!0),0!=i.validate.validateCount)return!1;i.buildFormData();var a=t(this);i.startLoading(a);var e=n.attr("action").match(/\/(\w{2})\/cart\/add/);if(i.getAjaxDataByFormData(),i.ogFormData.set("quantity",i.getQuantity()),i.ogFormData.set("id",t("#ymq-variant-id").val()),i.config.variantOriginal){var r=i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-id-dom","");r&&t(r).length>0&&i.ogFormData.set("id",t(r).val())}if(window.fbq){var c=0;if(i.config.variantData.hasOwnProperty(i.variant.variant_id)){var d=i.config.variantData[i.variant.variant_id];c=d.price;fbq("track","AddToCart",{content_type:"product_group",content_ids:[i.config.product.id],currency:Shopify.currency.active,value:c/100+i.ymq_total_price,num_items:i.getQuantity(),content_name:d.title,content_category:i.config.product.type}),console.log("fbq done")}}t.ajax({type:"POST",url:"/cart/add",enctype:"multipart/form-data",processData:!1,contentType:!1,cache:!1,data:i.ogFormData}).done((function(t){var o=i.config.util.getValue(i.config.ymq_option_branding.extra,"add-cart-url","");""==o?window.location.href=e?"/"+e[1]+"/cart":"/cart":0==o?location.reload():window.location.href=e?"/"+e[1]+`/${o}`:`/${o}`})).fail((function(o){if(console.log(o),i.config.variantData.hasOwnProperty(t("#ymq-variant-id").val())){var n=i.config.variantData[t("#ymq-variant-id").val()].name,e=i.config.util.getValue(i.config.ymq_option_branding.lan,"inventory_reminder","The product %s is already sold out.");alert(e.replace("%s",n))}i.endLoading(a)})),o.stopImmediatePropagation(),o.preventDefault()}))}hideShopifyDomAndRegisterAddCartEvent(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"add-cart-form-number",0);if(Number(o)==o)var n=t(i.config.form_box).eq(Number(o));else n=t(o);for(var a=i.config.shop,e=Shopify.theme.name.toLowerCase(),r=null,c=i.config.product,d=(["slimedotnet.myshopify.com","ridesharegear.myshopify.com","shoretees-ca.myshopify.com","winspear-picks.myshopify.com","sallureofficial.myshopify.com","the-million-roses-romania.myshopify.com","eventtechrentals.myshopify.com","hocwoman.myshopify.com","wigirlhair.myshopify.com","petshopmalta.myshopify.com","the2tails-mermaid-tails.myshopify.com","gwyllem.myshopify.com","kirudansk.myshopify.com","us-jewels-gems.myshopify.com","neweditionshop.myshopify.com","olemasonjar.myshopify.com","ronniemac69.myshopify.com","3bdshop0004.myshopify.com","teddy-winthrop.myshopify.com"].indexOf(a),t('\x3c!-- ymq custom product options by YMQ --\x3e\x3c!-- https://apps.shopify.com/ymq-options --\x3e<div id="ymq-box" class="ymq-box"></div>')),s=(n.find('[name="id"]'),t('<select id="test1111" name="id" style="display: none;"></select>')),u=0;u<c.variants.length;u+=1)s.append('<option value="'+c.variants[u].id+'"></option>');var p,l=[".productForm-block--options-inline .selector-wrapper",".swatches__container","#variations-content-product-template > .selector-wrapper",".product__variants__wrap",'.variations [class^="nt_select_pr_"]',".product__selectors .selector-wrapper, .selector-wrapper-secton .selector-wrapper",".ProductForm__Option","> .product-options.no-options > .product-type","div.select:not(.shopify-select)",".inline-field-wrapper","> .row > .col-sm-12.col-xs-12",".row .col-md-6.col-sm-12",".product-details-wrapper .product-options","> .product-options .swatches","> .product-options",".radio-wrapper",".product-single__variant","table.variations",".selection-wrapper.variant .selector-wrapper",".selection-wrapper.variant",".details_wrapper .color_product__options, .details_wrapper .size_product__options, .details_wrapper .single_product__options",".product-options--mobile, .product-options--desktop",".product-options",".select-container",".product-single__swatch",".lh-swatch-images, .lh-swatch-simple",".selector-wrapper:not(.full-width):not(.quantity-product-template)",".gf_swatches-selector",".product-form__option",".product-form__item:not(.product-form__item--quantity):not(.product-form__item--submit):not(.product-form__quantity-selector)",".variant-wrapper, > .swatches","[data-product-options-contariner]",".form__control","div.option",".form__control","#product-variants",".option-selectors",".variant-group",".form-field-swatch",'[class*="medium-item-grid"] .item, [class*="small-item-grid"] .item',".col-md-6.col-sm-12.col-xs-12:not(.selector-wrapper)",".product-options .swatches",".swatches-container",".tt-swatches-container .tt-wrapper",".tt-swatches-container",".variant-option",".option-header, .option-values",".product-option-list",'div[class="input-row"]',".product-form__controls-group .pf-container",".product-form__item",".variations","div[data-product-options-container]","[data-product-options-container]",".gf_variants-wrapper",".product-form__variants",'[data-label="(P) Variants"]','[data-label="(P) Swatches"]','[data-pf-type="ProductVariant"]',"> .js-product-options",".form__input-wrapper--select",".prd-block_options",".materialize-select",".c-cartform__label",".product-page--variants",".variants",".so-product-variants-wrap",".gt_product-swatches",".product-form--variants .radios--root, .product-form--variants .disclosure--root",".product-details__options .product-details__option-wrapper",".product-form-option",".so-custom-field-wrap",".sh-product-options",".product-page-info__variants"],m=i.config.util.getValue(i.config.ymq_option_branding.extra,"theme-variant-class","");if(""!=m&&l.unshift(m),i.config.replace&&(p=t(i.config.replace)),!p||!p.length)for(u=0;u<l.length;u+=1)if(0<(p=n.find(l[u])).length){".product-options--mobile, .product-options--desktop"===l[u]&&(p=p.add(n.find(".selector-wrapper:not(.full-width):not(.quantity-product-template)")));break}".product-form-wrapper .selector-wrapper"===l[u]&&setTimeout((function(){t(".product-form-options-wrapper").removeClass("large--hide")}),1e4);var f=":not(.scr-open-size-chart):not([data-quantity-action]):not(.js-qty-button):not(.uploadkit-button):not(.accordion__header):not(.quantity--input__button):not(.btn-num-product-down):not(.btn-num-product-up)";if("loft"===e&&0<n.find('[name="add"], .add-to-cart-btn').length?r=n.find('[name="add"], .add-to-cart-btn'):0<n.find("input#pre-order[type=submit]").length?r=n.find("input#pre-order[type=submit]").first():0<n.find("button[name=add]:not(.dummy_button_for)").length?r=n.find("button[name=add]:not(.dummy_button_for)"):0<n.find("input.add_to_cart, button.add_to_cart").length?r=n.find("input.add_to_cart, button.add_to_cart").first():0<n.find("button.add-to-cart, button.ProductForm__AddToCart").length?r=n.find("button.add-to-cart, button.ProductForm__AddToCart").first():0<n.find(".addToCart").length?r=n.find(".addToCart").first():0<n.find('button[type="submit"]'+f+", input[type=submit]").length?r=n.find('button[type="submit"]'+f+", input[type=submit]"):0<n.find("button"+f).length?r=n.find("button"+f).first():0<n.find(".btn-addtocart").length?r=n.find(".btn-addtocart").first():0<n.find(".shg-btn, .paira-add-to-cart").length&&(r=n.find(".shg-btn, .paira-add-to-cart").first()),r){if(c&&("pf-atc-button"===r.attr("id")||r.is('[data-pf-type="ProductATC"]')))(d=t("<button></button>")).html(r.html()),d.attr("class",r.attr("class")),r.replaceWith(d),r=d;setTimeout((function(){r.removeClass("disabled");try{r.attr("type","submit")}catch(t){}}),20)}if("optimizeinstagram.myshopify.com"===a?p=n.find(l[6]):"marei1998.myshopify.com"===a&&(p=n.find(".product-options label[for], .product-options label[for] + .select-wrapper")),r&&r.hasClass&&r.hasClass("shg-btn")){var y=t('<button type="submit" style="border: 0;" class="shg-btn" id="'+r.get(0).id+'">ADD TO CART</button>');r.replaceWith(y),(r=y).click((function(t){n.submit()}))}if(0<p.length){i.config.replace=l[u],p.parent().removeClass("d-none").removeClass("hide-for-all");var g=p.first().find('select, input[type="radio"], input[type="checkbox"]').first();g.length&&t._data(g.get(0),"events");".row .col-md-6.col-sm-12"!==l[u]&&".col-md-6.col-sm-12.col-xs-12:not(.selector-wrapper)"!==l[u]||d.find(".selector-wrapper").css({paddingLeft:15}),i.config.variantOriginal?p.last().css("marginBottom",Number(i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-original-margin-bottom",0))).after(d):p.first().before(d),d.parent().hide(),d.parent().show(),d.parent().removeClass("hide"),d.parent().parent().hide(),d.parent().parent().show(),d.parent().removeClass("hidden"),".gf_variants-wrapper"===l[u]&&t(l[u]+":first").closest('[data-label="(P) Variants"]').attr("id",""),d.last().after(n.find(".size-chart-link, .size-chart-container")),i.config.variantOriginal||p.each((function(i,o){0===t(o).find('input[name="quantity"]:not(.product-single__swatch__input), input[type="text"]:not(.select-dropdown):not([disabled="disabled"]), input[type="number"], input[type="submit"], button:not([aria-controls="modal-bohobi-size-chart"]):not(.custom-style-select-box)').filter(':not(.ProductForm__Item):not(.Popover__Value):not(.Popover__Close):not([data-activates]):not(.product-option-quantity):not([id^="SingleOptionSelector-"]):not([aria-controls="modal-size-chart"])').length&&t(o).hide()}))}else i.config.replace="no valid option found",n.prepend(d);var _=i.config.util.getValue(i.config.ymq_option_branding.extra,"hide-shopify-option","");""!=_&&t(_).hide();var h=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-hide","");""!=h&&t(h).hide();var q=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-show","");""!=q&&t(q).show();var v=n.find(".product-form-grid.product-form-grid-select");v.length&&(v.first().after(v.find(".product-quantity-label, .product-quantity-input")),n.find(".swatch, .product-form-grid.product-form-grid-select, .fake-choice, .product-variants-radio-btns").hide(),t(".product-single__meta > [itemscope] > .product-variants-item").hide());var b=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-add-to-cart","");if(""!=b)i.I=t(b);else{var w=t('form[action*="/cart/add"]'),D=(w=w.not('.ssw-product-form, #add-item-qv, [id^="product-actions"], .product-form--mini, .ca-form')).find('[name="add"], .add-to-cart-btn,#addToCart');D=D.add(r).add('.shopify-payment-button__button [role="button"], .shopify-payment-button__button [role="button"] span, .sticky_atc_js'),i.I=D}return i.doAddCart(),i}startLoading(t){t.addClass("ymq-btn-progress")}endLoading(t){t.removeClass("ymq-btn-progress")}controllerPaymentButton(i=!0,o=!1){var n=this;1==i&&n.buildFormData(),1==o?(n.validate.validateAll(n.formData,!0),0!=n.validate.validateCount?t(n.config.form_box).find(n.paymentButtonDom).css("pointerEvents","none"):t(n.config.form_box).find(n.paymentButtonDom).css("pointerEvents","auto")):n.validate.validateAllWithOutPrompt(n.formData)?t(n.config.form_box).find(n.paymentButtonDom).css("pointerEvents","none"):t(n.config.form_box).find(n.paymentButtonDom).css("pointerEvents","auto")}hidePaymentButton(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"payment-button-hide","");if(!i.config.hideByNow)return i.paymentButtonDom='#dynamic-checkout-cart, .shopify-cleanslate, .additional-checkout-buttons,[data-shopify="payment-button"]',""!=o&&t(i.config.form_box).find(o).length>0&&(i.paymentButtonDom=o),t(document).on("click","body",(function(o){t(i.config.form_box).find(i.paymentButtonDom).each((function(){if(t(this).length>0&&o.pageX>=t(this).offset().left&&o.pageX<=t(this).offset().left+t(this).outerWidth()&&o.pageY>=t(this).offset().top&&o.pageY<=t(this).offset().top+t(this).outerHeight())return i.controllerPaymentButton(!0,!0),!1}))})),i.controllerPaymentButton(),i;var n="";return""!=o&&(n+=`\n\t\t\t\t\t${o}{\n\t\t\t\t\t\tdisplay: none!important;\n\t\t\t\t\t}\n\t\t\t\t`,t(o).hide()),n+='\n\t\t\t\t#dynamic-checkout-cart, .shopify-cleanslate, .additional-checkout-buttons,[data-shopify="payment-button"]{\n\t\t\t\t\tdisplay: none!important;\n\t\t\t\t}\n\t\t\t',t("#dynamic-checkout-cart, .shopify-cleanslate, .additional-checkout-buttons").hide(),t('[data-shopify="payment-button"]').hide().remove(),t(i.config.styleDomId).append(n),i}buildVariantConditionName(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-condition-label-class",""),n=i.config.util.getValue(i.config.ymq_option_branding.extra,"variant-condition-value-parent-class","");return i.config.variantOriginal&&""!=o&&""!=n&&t(o).length>0&&t(n).length>0||(o=".ymq-shopify-option-box .ymq-option-title .ymq_lable",n=".ymq-shopify-option-box"),t(o).each((function(){t(this).parents(n).attr("name",`option-box-ymq-variant-${i.config.util.htmlSpecialChars(t(this).text()).trim()}`)})),this}buildStyle(){var i=this,o=":root{";Object.keys(i.config.ymq_option_branding).forEach((function(t){"lan"!=t&&"extra"!=t&&Object.keys(i.config.ymq_option_branding[t]).forEach((function(n){o+=`\n\t\t\t\t\t\t${n}: ${i.config.ymq_option_branding[t][n]};\n\t\t\t\t\t`}))})),o+="}";var n=i.config.util.getValue(i.config.ymq_option_branding.extra,"title-value","1,2,9,10");(n=n.split(",")).push(18,19);var a=[];return n.forEach((function(t){a.push(`.ymq-options-box-${t} .ymq_option_text_span`)})),o+=`\n\t\t\t\t${a.join(",")}{\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,o+=i.config.util.getValue(i.config.ymq_option_branding.extra,"extra-style-code",""),o+=i.config.util.getValue(i.config.ymq_option_branding.extra,"customecss",""),t(i.config.styleDomId).html(o),i}buildShopifyDom(){var t=this;return t.config.variantOriginal||t.variant.buildVariantHtml().isSoldOut(),t}buildYmqDom(){var t=this;return t.config.ymqHook("buildYmqDom_b"),t.htmlBuilder.setJson(t.config.ymq_option_data,t.config.ymq_option_condition).buildtHtml(),t.config.ymqHook("buildYmqDom_a"),t}disabledSubmit(){var i=this;return i.config.hideByNow?(t(i.config.form_box).submit((function(t){return t.preventDefault(),!1})),i):i}buildAddToCartDom(){var t=this;return t}getQuantity(){return parseInt(this.quantityDom.val())||1}reSetQtyByRadioValue(){var t=this.getQuantityGradeByRadioInput();null!=t&&this.setQuantity(t.quantity)}setQuantity(t){return isNaN(t)&&(t=1),t<1&&(t=1),this.quantityDom.val(t),this}setQuantityByQty(){var i=this;if(i.config.quantity_is_fix_type){var o=i.getQuantity();if(null!=(a=i.getQuantityGradeByRadioInput())){var n=a.quantity;o>n&&(t(".ymq-quantity-radio:checked").parents(".ymq-quantity-radio-box").next(".ymq-quantity-radio-box").find(".ymq-quantity-radio").trigger("click"),i.reSetQtyByRadioValue()),o<n&&(t(".ymq-quantity-radio:checked").parents(".ymq-quantity-radio-box").prev(".ymq-quantity-radio-box").find(".ymq-quantity-radio").trigger("click"),i.reSetQtyByRadioValue())}}else{var a,e=i.getQuantity();e=parseInt(e),isNaN(e)&&(e=1),!isNaN(i.config.min_quantity)&&e<i.config.min_quantity&&(e=i.config.min_quantity),!isNaN(i.config.max_quantity)&&e>i.config.max_quantity&&(e=i.config.max_quantity),i.setQuantity(e),null!=(a=i.getQuantityGradeByQtyInput())&&(0==t(`.ymq-quantity-radio-${a.quantity}`).length?t(".ymq-quantity-radio:checked").attr("checked",!1).prop("checked",!1):t(`.ymq-quantity-radio-${a.quantity}`).attr("checked")&&t(`.ymq-quantity-radio-${a.quantity}`).prop("checked")||(i.needchange=!1,t(`.ymq-quantity-radio-${a.quantity}`).trigger("click")))}}setQuantityByRadio(){var t=this,i=t.getQuantityGradeByRadioInput();return null!=i?t.setQuantity(i.quantity):isNaN(t.config.min_quantity)?t.setQuantity(1):t.setQuantity(t.config.min_quantity),t}getShopifyJqDom(i){return ymq.$?ymq.$(i):t(i)}buildQuantityDom(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"show-quantity","");if(""!=o&&t(o).length>0)var n=i.getShopifyJqDom(o);else n=i.getShopifyJqDom(`${i.config.form_box} [name="quantity"]`);if(n.length>=1)i.quantityDom=n;else{if(!i.quantityDomInited){if(0==i.config.util.getValue(i.config.ymq_option_branding.extra,"quantity-box",1))var a=`\n\t\t\t\t\t\t\t<div id="${i.config.quantity_box}" style="display: none!important;">\n\t\t\t\t\t\t\t\t<input id="${i.config.quantity_input}" value="1" readonly type="hidden">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;else a=`\n\t\t\t\t\t\t\t<div id="${i.config.quantity_box}">\n\t\t\t\t\t\t\t\t<div class="${i.config.quantity_change}" data-type="cut" id="${i.config.quantity_add}">-</div>\n\t\t\t\t\t\t\t\t<input id="${i.config.quantity_input}" name="quantity" value="1" type="text">\n\t\t\t\t\t\t\t\t<div class="${i.config.quantity_change}" data-type="add" id="${i.config.quantity_cut}">+</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`;t("#ymq-box").append(a),i.quantityDomInited=!0}i.quantityDom=i.getShopifyJqDom(`#${i.config.quantity_input}`),console.log(i.config.quantity_has_value),i.config.quantity_is_fix_type&&i.config.quantity_has_value&&i.quantityDom.attr("readonly",!0).prop("readonly",!0)}return i.registerQuantityChangeEvent(),i.setQuantityByRadio(),i}buildShowAddTotalPriceInfoDom(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-price-in-product-page",""),n=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-compare-at-price-in-product-page","");if(!(""!=o&&t(o).length>0||""!=n&&t(n).length>0)){var a=`\n\t\t\t\t\t<div id="ymq-price-addons">\n\t\t\t\t\t\t${i.config.ymq_option_branding.lan.add_price_text.replace("%s",'<span id="ymq-addons-price"></span>')}\n\t\t\t\t\t</div>\n\t\t\t\t`;t("#ymq-box").append(a)}return i}registerQuantityChangeEvent(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"quantity-change","");return t(".ymq-quantity-change").each((function(t,o){i.de(o,"click","namespace","","disable")})),i.quantityDom.each((function(t,o){i.de(o,"change","namespace","ymq","disable")})),""!=o&&t(o).each((function(t,o){i.de(o,"click","namespace","ymq","disable")})),t(".ymq-quantity-change").on("click",(function(){console.log(".ymq-quantity-change 点击");var o=-1;"add"==t(this).data("type")&&(o=1);var n=i.getQuantity();n=Number(n),n+=o,i.setQuantity(n),i.quantityDom.change()})),""!=o&&t(o).on("click.ymq",(function(){i.quantityDom.change()})),i.quantityDom.on("change.ymq",(function(){console.log("执行change"),i.quantityChange()})),this}quantityChange(){this.setQuantityByQty(),this.buildFormData()}getQuantityGradeByQtyInput(){var t=this.getQuantity();return this.doGetQuantityGrade(t)}getQuantityGradeByRadioInput(){var i=t(".ymq-quantity-radio:checked").val();return this.doGetQuantityGrade(parseInt(i))}doGetQuantityGrade(t){var i=this,o=null;if(i.config.hasQuantity&&i.config.quantity_has_value)if(i.config.quantity_is_fix_type)try{Object.keys(i.config.quantity.options).forEach((function(n){if(t==n)throw o=i.config.quantity.options[n],new Error("breakForEach")}))}catch(t){if("breakForEach"!=t.message)throw t}else try{Object.keys(i.config.quantity.options).forEach((function(n){if(t>=n&&t<=i.config.quantity.options[n].quantity_max)throw o=i.config.quantity.options[n],new Error("breakForEach")}))}catch(t){if("breakForEach"!=t.message)throw t}return o}getShopifySelectDom(){var i=this;t(i.config.form_box).css("cssText","display:block !important;");var o=[],n=[],a=[],e=[];return t(i.config.form_box).find("select").each((function(){o=[],n=[],a=[];var e=t(this);t(this).find("option").each((function(){o.push(t(this).html()),n.push(t(this).val()),a.push(i.config.util.htmlSpecialChars(t(this).val()))})),Object.keys(i.config.ymq_shopify_options).forEach((function(t,r){i.config.shopifySelectDom.hasOwnProperty(t)||JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(o)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(n)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(a)||(i.config.shopifySelectDom[t]={},i.config.shopifySelectDom[t].jq=e,i.config.shopifySelectDom[t].type="select",e.attr("id")?i.config.shopifySelectDom[t].id=e.attr("id"):(i.config.shopifySelectDom[t].id=`ymq_shopify_select_id_${t}`,e.attr("id",`ymq_shopify_select_id_${t}`)))}))})),t(i.config.form_box).find(":radio").each((function(){e.push(t(this).attr("name"))})),(e=t.unique(e)).forEach((function(o){n=[],a=[],t("input[name='"+o+"']").each((function(){n.push(t(this).val()),a.push(i.config.util.htmlSpecialChars(t(this).val()))}));var e=t("input[name='"+o+"']");Object.keys(i.config.ymq_shopify_options).forEach((function(t,r){i.config.shopifySelectDom.hasOwnProperty(t)||JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(n)&&JSON.stringify(i.config.ymq_shopify_options[t])!=JSON.stringify(a)||(i.config.shopifySelectDom[t]={},i.config.shopifySelectDom[t].jq=e,i.config.shopifySelectDom[t].type="radio",i.config.shopifySelectDom[t].name=o)}))})),i}registerInputChangeEvent(){var i=this;return t(i.config.form_box).find('input[type="text"],input[type="number"],textarea').on("keyup",(function(){var o=t(this).parents(".ymq-options-box");i.buildFormData().validateOne(o),i.config.hideByNow||i.controllerPaymentButton(!1)})),t(document).on("change",'form[action*="/cart/add"] input,form[action*="/cart/add"] select',(function(){if(t(this).hasClass("ymq-shopify-option")&&(i.variant.isSoldOut(),i.variant.changeUriByVariantId()),i.config.variantOriginal){var o=i.config.util.getUrlParam("variant");o&&(i.variant.variant_id=o,i.variant.changeVariantId())}var n=t(this).parents(".ymq-options-box");i.buildFormData().validateOne(n),i.config.hideByNow||i.controllerPaymentButton(!1)})),t(document).on("change",".ymq-quantity-radio",(function(){i.needchange&&i.setQuantityByRadio().buildFormData(),i.needchange=!0})),i}validateOne(t){var i=this,o=t.data("name");return i.validate.validateOne(i.formData[o]),i}validateAll(t=!1){var i=this;return i.validate.validateAll(i.formData,t),i}registerBuyItNowEvent(){var i=this;return t("body").on("click",`#${i.config.buy_id_now}`,(function(){if(i.validate.validateAll(i.formData,!0),0!=i.validate.validateCount)return!1;var o={};o.item_count=t(`#${i.config.quantity_input}`).val(),o.items=[];var n={};n.variant_id=i.variant.variant_id,n.quantity=o.item_count,n.product_id=i.config.product.id,n.product_title=i.config.product.title,n.line_price=i.config.variantData[i.variant.variant_id].price*o.item_count,n.properties=i.getAjaxDataByFormData(!0),o.items.push(n),t.ajax({type:"POST",url:"https://option.ymq.cool/api/checkout",data:{data:o,shop:i.config.shop,token:i.config.token,timestamp:i.config.timestamp,customer_id:i.config.customer_id},dataType:"json",success:function(t){window.location.href=t.data},error:function(t){}})})),i}getAjaxDataByFormData(t=!1){var i=this,o={};return Object.keys(i.formData).forEach((function(n){if(0!=i.formData[n].value.length||i.formData[n].hasOwnProperty("isFile")){i.selectedValue=i.formData[n];var a=i.selectedValue.value.join(",");if(Number(i.selectedValue.price)>0&&(a+=` | ${i.config.doFormat(i.selectedValue.price,i.selectedValue.onetime)}`),t)o[n.substring(11,n.length-1)]=a;else if(i.formData[n].hasOwnProperty("isFile")){if(i.upload.fileData.hasOwnProperty(n)){var e=Object.keys(i.upload.fileData[n]).length;e>0&&Object.keys(i.upload.fileData[n]).forEach((function(t,o){i.ogFormData.set(1==e?n:i.reCreatName(n,o),i.upload.fileData[n][t].file,i.upload.fileData[n][t].name)}))}}else i.ogFormData.set(n,a),o[n]=a}})),o}reCreatName(t=null,i=0){return`properties[${t=t.substring(11,t.length-1)}_${i}]`}registerAddToCartEvent(){var i=this;return t("body").on("click",`#${i.config.add_to_cart}`,(function(){if(i.validate.validateAll(i.formData,!0),0!=i.validate.validateCount)return!1;t(this).addClass("ymq-btn-progress");var o=i.getAjaxDataByFormData();o.id=t("#ymq-variant-id").val(),o.quantity=i.getQuantity(),t.ajax({type:"POST",url:"/cart/add.js",data:o,dataType:"json",success:function(t){window.location.href="/cart"},error:function(i){t(this).removeClass("ymq-btn-progress")}})})),i}getMultiple(t){return-1!=this.config.multipleTypeArray.indexOf(Number(t))}buildFormData(){var i=this;i.config.ymqHook("buildFormData_b"),i.formData={},t(i.config.form_box).find(".ymq-options-box").each((function(){var o=t(this).data("name"),n=Number(t(this).data("type")),a=t(this).data("class"),e=Number(t(this).data("onetime"));window.ymq_option.ymq_option_branding.extra.plan<2&&(e=0);var r={},c=t(this).find(`.${a}`),d=t(this).find(`.${a}:disabled`),s=t(this).data("validate");if(18==n||19==n){var u=i.getQuantityGradeByQtyInput();if(null!=u){var p=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-rang","qtyRange"),l=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount","discount"),m=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type","discountType"),f=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type-percentage","percentage"),y=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-discount-type-fixed","fixed"),g=i.config.util.getValue(i.config.ymq_option_branding.lan,"max-quantity","999999"),_=`${p}: ${u.quantity} - ${999999==Number(u.quantity_max?u.quantity_max:u.quantity)?g:Number(u.quantity_max?u.quantity_max:u.quantity)} | ${l}: ${u.discount} | ${m}: ${1==Number(u.discount_type)?f:y}`;r={onetime:0,price:0,validate:"",value:[_]}}else if(!(19!=n||isNaN(i.config.min_quantity)&&isNaN(i.config.max_quantity))){var h=1,q=i.config.max_num;isNaN(i.config.min_quantity)||(h=i.config.min_quantity),isNaN(i.config.max_quantity)||(q=i.config.max_quantity);p=i.config.util.getValue(i.config.ymq_option_branding.lan,"qty-rang","qtyRange");r={onetime:0,price:0,validate:"",value:[_=`${p}: ( ${h} - ${q} ) `]}}}else if(1==c.length){if(!c.prop("disabled"))if(r.onetime=e,7==n||3==n){r.value=[];var v=0;t(this).find("option").each((function(){t(this).prop("selected")&&(r.value.push(t(this).val()),t(this).data("price")&&(v-=-Number(t(this).data("price"))))})),r.price=v,r.validate=s}else if(!0,"radio"==c.attr("type")||"checkbox"==c.attr("type")){r.value=[];v=0;c.prop("checked")&&(r.value.push(c.val()),c.data("price")&&(v-=-Number(c.data("price")))),r.price=v,r.validate=s}else if("file"==c.prop("type")){if(r.value=[],""!=i.config.util.getValue(i.config.ymq_option_branding.extra,"upload-num-prompt","")){var b=0;i.upload.fileData.hasOwnProperty(o)&&(b=Object.keys(i.upload.fileData[o]).length),r.value.push(`(${b} / ${c.data("file-num")})`)}r.price=0,0!=r.value.length&&(r.price=c.data("price")?Number(c.data("price")):0),r.isFile=!0,r.name=o,r.validate=s}else r.value=""==c.val()?[]:[c.val()],r.price=0,0!=r.value.length&&(r.price=c.data("price")?Number(c.data("price")):0),r.validate=s}else if(c.length!=d.length){r.onetime=e,r.value=[];v=0;c.each((function(){t(this).prop("disabled")||t(this).prop("checked")&&(r.value.push(t(this).val()),t(this).data("price")&&(v-=-Number(t(this).data("price"))))})),r.price=v,r.validate=s}if(!t.isEmptyObject(r)){r.dom=c.eq(0),i.selectedValue=r;var w=i.selectedValue.value.join(",");if(Number(i.selectedValue.price)>0&&(w+=` | ${i.config.doFormat(i.selectedValue.price,e,!0)}`),Number(i.selectedValue.price)>0){var D=i.config.util.getValue(i.config.ymq_option_branding.extra,"title-value","1,2,9,10");D=D.split(","),(t.inArray(n,D)>=0||t.inArray(n.toString(),D)>=0)&&t(this).find(".ymq_option_price_span").html(i.config.doFormat(i.selectedValue.price,e,!0))}else t(this).find(".ymq_option_price_span").html("");t(this).find(".ymq_option_text_span").html(w),t(this).hasClass("ymq-shopify-option-box")||(i.formData[o]=r)}})),i.ymq_total_price=0,i.ymq_total_price_single=0,i.ymq_option_price=0,i.ymq_option_price_single=0;var o=i.getQuantity();return Object.keys(i.formData).forEach((function(t){1==Number(i.formData[t].onetime)?(i.ymq_total_price=Number(i.ymq_total_price)+Number(i.formData[t].price),i.ymq_option_price_single=Number(i.ymq_option_price_single)+Number(i.formData[t].price)):(i.ymq_total_price=Number(i.ymq_total_price)+Number(i.formData[t].price)*o,i.ymq_option_price=Number(i.ymq_option_price)+Number(i.formData[t].price)),i.ymq_total_price_single=Number(i.ymq_total_price_single)+Number(i.formData[t].price)})),i.price(),i.buildQuantityDiscount(),i.config.ymqHook("buildFormData_a"),i}buildQuantityDiscount(){var i=this,o=i.config.variantData[i.variant.variant_id].price,n=i.config.util.getValue(i.config.ymq_option_branding.lan,"q-save","Save");return t(".ymq-quantity-radio-box").each((function(){var a,e=0,r=2,c=1,d=0;if(t(this).hasClass("ymq-quantity-show-box")){var s=i.getQuantityGradeByQtyInput();null!=s?(t(this).show(),e=Number(s.discount),r=Number(s.discount_type),c=i.getQuantity(),t(this).find(".ymq-quantity-buy-quantity").html(c),1==r?t(this).find(".ymq-quantity-discount").html(`${n} ${e}%`):t(this).find(".ymq-quantity-discount").html(`-${i.config.doFormat(e)}`)):t(this).hide()}else e=Number(t(this).find(".ymq-quantity-discount-price").data("discount")),r=Number(t(this).find(".ymq-quantity-discount-price").data("discount_type")),c=Number(t(this).find(".ymq-quantity-discount-price").data("quantity"));a=(Number(o)/100+Number(i.ymq_option_price))*c+Number(i.ymq_option_price_single),d=1==r?a*(1-e/100):a-e,t(this).find(".ymq-quantity-discount-price").html(i.config.doFormat(d)),t(this).find(".ymq-quantity-compared-price,.ymq-quantity-compared-price-no-discount").html(i.config.doFormat(a))})),i}price(){var i=this,o=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-price-in-product-page",""),n=i.config.util.getValue(i.config.ymq_option_branding.extra,"product-compare-at-price-in-product-page","");if(""!=o&&t(o).length>0||""!=n&&t(n).length>0){if(i.config.variantData.hasOwnProperty(i.variant.variant_id)){var a=i.config.variantData[i.variant.variant_id],e=a.price,r=a.compare_at_price;console.log(e,o,t(o).length),""!=o&&t(o).length>0&&t(o).html(i.config.doFormat((100*Number(i.ymq_total_price_single)+Number(e))/100)),console.log(r,n,t(n).length),""!=n&&t(n).length>0&&r&&t(n).html(i.config.doFormat((100*Number(i.ymq_total_price_single)+Number(r))/100))}}else 0==Number(i.ymq_total_price)?t("#ymq-price-addons").slideUp(300,"swing"):t("#ymq-price-addons").slideDown(300,"swing"),t("#ymq-addons-price").html(i.config.doFormat(i.ymq_total_price,0,!0));return i}initConfig(){var o=this;if(o.config=i.getInstance(),o.config.shop=window.ymq_option.shop,o.config.token=window.ymq_option.token,o.config.timestamp=window.ymq_option.timestamp,o.config.customer_id=window.ymq_option.customer_id,o.config.product=window.ymq_option.product,o.config.ymq_shopify_options=window.ymq_option.ymq_shopify_options,o.config.money_format=window.ymq_option.ymq_option_branding.lan.currency,o.config.form_box="",o.config.shopifySelectDom=[],t('form[action="/cart/add"]').length>=1)o.config.form_box='form[action="/cart/add"]';else if(t('form[action*="/cart/add"]').length>=1){var n=t('form[action*="/cart/add"]').attr("action");o.config.form_box=`form[action="${n}"]`}o.config.util.getUrlParam("ymq_view")?(o.config.ymq_variantjson=window.ymq_option.ymq_variantjson_yulan,o.config.ymq_option_data=window.ymq_option.ymq_option_data_yulan,o.config.ymq_option_condition=window.ymq_option.ymq_option_condition_yulan,o.config.ymq_option_template=window.ymq_option.ymq_option_template_yulan,o.config.ymq_option_template_condition=window.ymq_option.ymq_option_template_condition_yulan):(o.config.ymq_variantjson=window.ymq_option.ymq_variantjson,o.config.ymq_option_data=window.ymq_option.ymq_option_data,o.config.ymq_option_condition=window.ymq_option.ymq_option_condition,o.config.ymq_option_template=window.ymq_option.ymq_option_template,o.config.ymq_option_template_condition=window.ymq_option.ymq_option_template_condition),console.log(o.config.ymq_option_data),o.config.ymq_option_settings=window.ymq_option.ymq_option_settings,o.config.ymq_option_branding=window.ymq_option.ymq_option_branding,o.config.ymq_has_only_default_variant=window.ymq_option.ymq_has_only_default_variant,o.config.variantData={},o.config.product.variants.forEach((function(t){o.config.variantData[t.id]=t})),o.config.variantOriginal=!1,1==o.config.util.getValue(o.config.ymq_option_branding.extra,"variant-original",0)&&(o.config.variantOriginal=!0),o.config.onetimetag=` ( ${o.config.util.getValue(o.config.ymq_option_branding.lan,"one-time-tag","one time")} )`}static getInstance(){return this.instance||(this.instance=new o),this.instance}}}));