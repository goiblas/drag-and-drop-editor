import balanceModuleImage from './assets/balance-module.png';
import barChartModuleImage from './assets/bar-chart-module.png';
import transactionsModuleImage from './assets/transactions-module.png';
import textModuleImage from './assets/text-module.png';
import barChartTemplateImage from './assets/template-bar-chart.png';
import balanceTemplateImage from './assets/template-balance.png';
import textTemplateImage from './assets/template-text.png';
import transactionsTemplateImage from './assets/template-transactions.png';

export const modules = [{
    type: "balance",
    image: balanceModuleImage,
    title: "Saldos",
}, {
    type: "bar_chart",
    image: barChartModuleImage,
    title: "Gráfico",
}, {
    type: "transactions",
    image: transactionsModuleImage,
    title: "Transacciones",
}, {
    type: "text",
    image: textModuleImage,
    title: "Texto", 
}]

export const templates = {
    bar_chart: {
        title: "Gráfico",
        image: barChartTemplateImage,
        type: "bar_chart",
        html: `
        <div style="font-family: -apple-system, sans-serif; padding:16px 8px">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"
            style="font-family: -apple-system, sans-serif; font-size: 16px; line-height: 24px;margin-top: 40px;">
            <tbody>
                <tr>


                    <td valign="bottom" align="center">
                        <div style="height: 199.999407022631px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div style="height: 0.0px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div style="height: 0.0px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div
                            style="height: 19.953688467479637px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div
                            style="height: 24.169757561202676px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div
                            style="height: 29.637008903555195px;background-color: #FFEBCB;border-radius: 6px;width: 70%">
                        </div>
                    </td>



                    <td valign="bottom" align="center">
                        <div style="height: 0.0px;background-color: #D15554;border-radius: 6px;width: 70%">
                        </div>
                    </td>


                </tr>
                <tr style="text-align: center;line-height: 1.4;">


                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>05/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">-337,28€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>06/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">0,00€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>07/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">0,00€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>08/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">-33,65€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>09/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">-40,76€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>10/12</b>
                        </div>
                        <div style="font-size: 12px; color: #999">-49,98€
                        </div>
                    </td>



                    <td>
                        <div style="font-size: 14px; color: #111;padding-top: 10px;">
                            <b>11/12</b>
                        </div>
                        <div style="font-size: 12px; color: #111;font-weight: bold;">
                            0,00€
                        </div>
                    </td>


                </tr>
            </tbody>
        </table>


    </div>
        `
    },
    balance: {
        title: "Balances",
        image: balanceTemplateImage,
        type: "balance",
        html: `
        <div style="font-family: -apple-system, sans-serif; padding:16px 8px">
        <div style="font-family: -apple-system, sans-serif;margin: 0 0 15px 0;">
            <b style="font-size: 16px;">Saldos</b>
            <span style="font-size: 14px; color:#999">(últimos saldos
                conocidos)</span>
        </div>

        <div style="padding: 15px; border-radius: 10px; background-color: #F7F4F1;margin-top: 10px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: -apple-system, sans-serif;
font-size: 16px; line-height: 24px;">
                <tbody>

                    <tr>
                        <td valign="top">
                            <img src="https://banktrack.s3.eu-west-1.amazonaws.com/providers_logos/paypal.png"
                                width="28">
                        </td>
                        <td align="right">
                            <b style="font-size: 18px">31,22€</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 14px; color: #777">
                            PayPal · PayPal (EUR)
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>

        <div style="padding: 15px; border-radius: 10px; background-color: #F7F4F1;margin-top: 10px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: -apple-system, sans-serif;
font-size: 16px; line-height: 24px;">
                <tbody>

                    <tr>
                        <td valign="top">
                            <img src="https://banktrack.s3.eu-west-1.amazonaws.com/providers_logos/paypal.png"
                                width="28">
                        </td>
                        <td align="right">
                            <b style="font-size: 18px">0,00US$</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 14px; color: #777">
                            PayPal · PayPal (USD)
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>

        <div style="padding: 15px; border-radius: 10px; background-color: #F7F4F1;margin-top: 10px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: -apple-system, sans-serif;
font-size: 16px; line-height: 24px;">
                <tbody>

                    <tr>
                        <td valign="top">
                            <img src="https://static.afterbanks.com/api/icons/openbank.min.png" width="28">
                        </td>
                        <td align="right">
                            <b style="font-size: 18px">3.400,78€</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 14px; color: #777">
                            OpenBank · CUENTA CORRIENTE
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>

        <div style="padding: 15px; border-radius: 10px; background-color: #F7F4F1;margin-top: 10px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: -apple-system, sans-serif;
font-size: 16px; line-height: 24px;">
                <tbody>

                    <tr>
                        <td valign="top">
                            <img src="https://static.afterbanks.com/api/icons/kutxabank.min.png" width="28">
                        </td>
                        <td align="right">
                            <b style="font-size: 18px">1.163,10€</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 14px; color: #777">
                            Kutxabank · Principal
                        </td>

                        <td align="right" valign="top">
                            <span style="font-size: 14px; color: #469B4A">+0,00
                                €</span>
                            &nbsp;
                            <span style="font-size: 14px; color: #D15554">-105,45
                                €</span>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>

        <div style="padding: 15px; border-radius: 10px; background-color: #F7F4F1;margin-top: 10px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: -apple-system, sans-serif;
font-size: 16px; line-height: 24px;">
                <tbody>

                    <tr>
                        <td valign="top">
                            <img src="https://static.afterbanks.com/api/icons/kutxabank.min.png" width="28">
                        </td>
                        <td align="right">
                            <b style="font-size: 18px">785,73€</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 14px; color: #777">
                            Kutxabank · Carol
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>
        `
    },
    text: {
        title: "Texto",
        image: textTemplateImage,
        type: "text",
        html: `
        <div style="font-family: -apple-system, sans-serif; padding:16px 8px">
            <div style="font-size: 16px; color: #777;margin-bottom: 5px;">
                <b>Mi Informe de Banktrack</b>
            </div>
            <span style="font-size: 23px; line-height: 30px; color: #111">

                <b style="border-bottom: 2px solid #D15554">
                    -105,45€
                </b> en gastos y
                <b style="border-bottom: 2px solid #469B4A">
                    0,00€</b> en ingresos
                ayer.


                Tienes <b style="border-bottom: 2px solid #CCC">
                    2.380,83€</b> en tus cuentas.</span>
        </div>
        `
    },
    transactions: {
        title: "Transacciones",
        image: transactionsTemplateImage,
        type: "transactions",
        html: `
        <div style="font-family: -apple-system, sans-serif; padding:16px 8px">
            <div style="font-family: -apple-system, sans-serif;margin: 0 0 15px 0;
    padding-bottom: 5px;">
                <b style="font-size: 16px;">Transacciones</b>

                <span style="font-size: 14px; color:#999">(realizadas o
                    ejecutadas durante el 12/12)</span>

            </div>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"
                style="font-family: -apple-system, sans-serif;">
                <tbody>




                    <tr>
                        <td style="border-bottom: 2px solid #F7F4F1;border-top: 2px solid #F7F4F1;padding: 10px 0;"
                            colspan="70%">
                            <span style="font-size: 15px;">RECIBO CDAD.PISCINA
                                LOPE </span>
                            <br>
                            <span style="font-size: 12px;color: #777;">Kutxabank
                                · Principal</span>
                        </td>
                        <td valign="top" align="right" style="font-size: 15px;
    border-bottom: 2px solid #F7F4F1;border-top: 2px solid #F7F4F1;
    padding: 10px 0;" colspan="30%">

                            <span style="color: #000000;font-size: 15px;">-105,45
                                €</span>

                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
        `
    }
}