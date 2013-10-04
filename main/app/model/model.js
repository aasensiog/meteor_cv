Meteor.countryCollection = new Meteor.Collection('country');
var availableCountries = [
{"short":"AD","name":"Andorra"},
{"short":"AE","name":"United Arab Emirates"},
{"short":"AF","name":"Afghanistan"},
{"short":"AG","name":"Antigua and Barbuda"},
{"short":"AI","name":"Anguilla"},
{"short":"AL","name":"Albania"},
{"short":"AM","name":"Armenia"},
{"short":"AO","name":"Angola"},
{"short":"AQ","name":"Antarctica"},
{"short":"AR","name":"Argentina"},
{"short":"AS","name":"American Samoa"},
{"short":"AT","name":"Austria"},
{"short":"AU","name":"Australia"},
{"short":"AW","name":"Aruba"},
{"short":"AX","name":"Åland Islands"},
{"short":"AZ","name":"Azerbaijan"},
{"short":"BA","name":"Bosnia and Herzegovina"},
{"short":"BB","name":"Barbados"},
{"short":"BD","name":"Bangladesh"},
{"short":"BE","name":"Belgium"},
{"short":"BF","name":"Burkina Faso"},
{"short":"BG","name":"Bulgaria"},
{"short":"BH","name":"Bahrain"},
{"short":"BI","name":"Burundi"},
{"short":"BJ","name":"Benin"},
{"short":"BL","name":"Saint Barthélemy"},
{"short":"BM","name":"Bermuda"},
{"short":"BN","name":"Brunei Darussalam"},
{"short":"BO","name":"Bolivia"},
{"short":"BQ","name":"Bonaire"},
{"short":"BR","name":"Brazil"},
{"short":"BS","name":"Bahamas"},
{"short":"BT","name":"Bhutan"},
{"short":"BV","name":"Bouvet Island"},
{"short":"BW","name":"Botswana"},
{"short":"BY","name":"Belarus"},
{"short":"BZ","name":"Belize"},
{"short":"CA","name":"Canada"},
{"short":"CC","name":"Cocos (Keeling) Islands"},
{"short":"CD","name":"Congo"},
{"short":"CF","name":"Central African Republic"},
{"short":"CG","name":"Congo"},
{"short":"CH","name":"Switzerland"},
{"short":"CI","name":"Côte d'Ivoire"},
{"short":"CK","name":"Cook Islands"},
{"short":"CL","name":"Chile"},
{"short":"CM","name":"Cameroon"},
{"short":"CN","name":"China"},
{"short":"CO","name":"Colombia"},
{"short":"CR","name":"Costa Rica"},
{"short":"CU","name":"Cuba"},
{"short":"CV","name":"Cape Verde"},
{"short":"CW","name":"Curaçao"},
{"short":"CX","name":"Christmas Island"},
{"short":"CY","name":"Cyprus"},
{"short":"CZ","name":"Czech Republic"},
{"short":"DE","name":"Germany"},
{"short":"DJ","name":"Djibouti"},
{"short":"DK","name":"Denmark"},
{"short":"DM","name":"Dominica"},
{"short":"DO","name":"Dominican Republic"},
{"short":"DZ","name":"Algeria"},
{"short":"EC","name":"Ecuador"},
{"short":"EE","name":"Estonia"},
{"short":"EG","name":"Egypt"},
{"short":"EH","name":"Western Sahara"},
{"short":"ER","name":"Eritrea"},
{"short":"ES","name":"Spain"},
{"short":"ET","name":"Ethiopia"},
{"short":"FI","name":"Finland"},
{"short":"FJ","name":"Fiji"},
{"short":"FK","name":"Falkland Islands (Malvinas)"},
{"short":"FM","name":"Micronesia"},
{"short":"FO","name":"Faroe Islands"},
{"short":"FR","name":"France"},
{"short":"GA","name":"Gabon"},
{"short":"GB","name":"United Kingdom"},
{"short":"GD","name":"Grenada"},
{"short":"GE","name":"Georgia"},
{"short":"GF","name":"French Guiana"},
{"short":"GG","name":"Guernsey"},
{"short":"GH","name":"Ghana"},
{"short":"GI","name":"Gibraltar"},
{"short":"GL","name":"Greenland"},
{"short":"GM","name":"Gambia"},
{"short":"GN","name":"Guinea"},
{"short":"GP","name":"Guadeloupe"},
{"short":"GQ","name":"Equatorial Guinea"},
{"short":"GR","name":"Greece"},
{"short":"GS","name":"South Georgia and the South Sandwich Islands"},
{"short":"GT","name":"Guatemala"},
{"short":"GU","name":"Guam"},
{"short":"GW","name":"Guinea-Bissau"},
{"short":"GY","name":"Guyana"},
{"short":"HK","name":"Hong Kong"},
{"short":"HM","name":"Heard Island and McDonald Islands"},
{"short":"HN","name":"Honduras"},
{"short":"HR","name":"Croatia"},
{"short":"HT","name":"Haiti"},
{"short":"HU","name":"Hungary"},
{"short":"ID","name":"Indonesia"},
{"short":"IE","name":"Ireland"},
{"short":"IL","name":"Israel"},
{"short":"IM","name":"Isle of Man"},
{"short":"IN","name":"India"},
{"short":"IO","name":"British Indian Ocean Territory"},
{"short":"IQ","name":"Iraq"},
{"short":"IR","name":"Iran"},
{"short":"IS","name":"Iceland"},
{"short":"IT","name":"Italy"},
{"short":"JE","name":"Jersey"},
{"short":"JM","name":"Jamaica"},
{"short":"JO","name":"Jordan"},
{"short":"JP","name":"Japan"},
{"short":"KE","name":"Kenya"},
{"short":"KG","name":"Kyrgyzstan"},
{"short":"KH","name":"Cambodia"},
{"short":"KI","name":"Kiribati"},
{"short":"KM","name":"Comoros"},
{"short":"KN","name":"Saint Kitts and Nevis"},
{"short":"KP","name":"Korea"},
{"short":"KR","name":"Korea"},
{"short":"KW","name":"Kuwait"},
{"short":"KY","name":"Cayman Islands"},
{"short":"KZ","name":"Kazakhstan"},
{"short":"LA","name":"Lao People's Democratic Republic"},
{"short":"LB","name":"Lebanon"},
{"short":"LC","name":"Saint Lucia"},
{"short":"LI","name":"Liechtenstein"},
{"short":"LK","name":"Sri Lanka"},
{"short":"LR","name":"Liberia"},
{"short":"LS","name":"Lesotho"},
{"short":"LT","name":"Lithuania"},
{"short":"LU","name":"Luxembourg"},
{"short":"LV","name":"Latvia"},
{"short":"LY","name":"Libya"},
{"short":"MA","name":"Morocco"},
{"short":"MC","name":"Monaco"},
{"short":"MD","name":"Moldova"},
{"short":"ME","name":"Montenegro"},
{"short":"MF","name":"Saint Martin (French part)"},
{"short":"MG","name":"Madagascar"},
{"short":"MH","name":"Marshall Islands"},
{"short":"MK","name":"Macedonia"},
{"short":"ML","name":"Mali"},
{"short":"MM","name":"Myanmar"},
{"short":"MN","name":"Mongolia"},
{"short":"MO","name":"Macao"},
{"short":"MP","name":"Northern Mariana Islands"},
{"short":"MQ","name":"Martinique"},
{"short":"MR","name":"Mauritania"},
{"short":"MS","name":"Montserrat"},
{"short":"MT","name":"Malta"},
{"short":"MU","name":"Mauritius"},
{"short":"MV","name":"Maldives"},
{"short":"MW","name":"Malawi"},
{"short":"MX","name":"Mexico"},
{"short":"MY","name":"Malaysia"},
{"short":"MZ","name":"Mozambique"},
{"short":"NA","name":"Namibia"},
{"short":"NC","name":"New Caledonia"},
{"short":"NE","name":"Niger"},
{"short":"NF","name":"Norfolk Island"},
{"short":"NG","name":"Nigeria"},
{"short":"NI","name":"Nicaragua"},
{"short":"NL","name":"Netherlands"},
{"short":"NO","name":"Norway"},
{"short":"NP","name":"Nepal"},
{"short":"NR","name":"Nauru"},
{"short":"NU","name":"Niue"},
{"short":"NZ","name":"New Zealand"},
{"short":"OM","name":"Oman"},
{"short":"PA","name":"Panama"},
{"short":"PE","name":"Peru"},
{"short":"PF","name":"French Polynesia"},
{"short":"PG","name":"Papua New Guinea"},
{"short":"PH","name":"Philippines"},
{"short":"PK","name":"Pakistan"},
{"short":"PL","name":"Poland"},
{"short":"PM","name":"Saint Pierre and Miquelon"},
{"short":"PN","name":"Pitcairn"},
{"short":"PR","name":"Puerto Rico"},
{"short":"PS","name":"Palestine"},
{"short":"PT","name":"Portugal"},
{"short":"PW","name":"Palau"},
{"short":"PY","name":"Paraguay"},
{"short":"QA","name":"Qatar"},
{"short":"RE","name":"Réunion"},
{"short":"RO","name":"Romania"},
{"short":"RS","name":"Serbia"},
{"short":"RU","name":"Russian Federation"},
{"short":"RW","name":"Rwanda"},
{"short":"SA","name":"Saudi Arabia"},
{"short":"SB","name":"Solomon Islands"},
{"short":"SC","name":"Seychelles"},
{"short":"SD","name":"Sudan"},
{"short":"SE","name":"Sweden"},
{"short":"SG","name":"Singapore"},
{"short":"SH","name":"Saint Helena"},
{"short":"SI","name":"Slovenia"},
{"short":"SJ","name":"Svalbard and Jan Mayen"},
{"short":"SK","name":"Slovakia"},
{"short":"SL","name":"Sierra Leone"},
{"short":"SM","name":"San Marino"},
{"short":"SN","name":"Senegal"},
{"short":"SO","name":"Somalia"},
{"short":"SR","name":"Suriname"},
{"short":"SS","name":"South Sudan"},
{"short":"ST","name":"Sao Tome and Principe"},
{"short":"SV","name":"El Salvador"},
{"short":"SX","name":"Sint Maarten (Dutch part)"},
{"short":"SY","name":"Syrian Arab Republic"},
{"short":"SZ","name":"Swaziland"},
{"short":"TC","name":"Turks and Caicos Islands"},
{"short":"TD","name":"Chad"},
{"short":"TF","name":"French Southern Territories"},
{"short":"TG","name":"Togo"},
{"short":"TH","name":"Thailand"},
{"short":"TJ","name":"Tajikistan"},
{"short":"TK","name":"Tokelau"},
{"short":"TL","name":"Timor-Leste"},
{"short":"TM","name":"Turkmenistan"},
{"short":"TN","name":"Tunisia"},
{"short":"TO","name":"Tonga"},
{"short":"TR","name":"Turkey"},
{"short":"TT","name":"Trinidad and Tobago"},
{"short":"TV","name":"Tuvalu"},
{"short":"TW","name":"Taiwan"},
{"short":"TZ","name":"Tanzania"},
{"short":"UA","name":"Ukraine"},
{"short":"UG","name":"Uganda"},
{"short":"UM","name":"United States Minor Outlying Islands"},
{"short":"US","name":"United States"},
{"short":"UY","name":"Uruguay"},
{"short":"UZ","name":"Uzbekistan"},
{"short":"VA","name":"Holy See (Vatican City State)"},
{"short":"VC","name":"Saint Vincent and the Grenadines"},
{"short":"VE","name":"Venezuela"},
{"short":"VG","name":"Virgin Islands"},
{"short":"VI","name":"Virgin Islands"},
{"short":"VN","name":"Viet Nam"},
{"short":"VU","name":"Vanuatu"},
{"short":"WF","name":"Wallis and Futuna"},
{"short":"WS","name":"Samoa"},
{"short":"YE","name":"Yemen"},
{"short":"YT","name":"Mayotte"},
{"short":"ZA","name":"South Africa"},
{"short":"ZM","name":"Zambia"},
{"short":"ZW","name":"Zimbabwe"}
];

for (var i = availableCountries.length - 1; i >= 0; i--) {
    Meteor.countryCollection.insert(availableCountries[i]);
};
