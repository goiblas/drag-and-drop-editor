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
        image: barChartTemplateImage
    },
    balance: {
        title: "Gráfico",
        image: balanceTemplateImage
    },
    text: {
        title: "Texto",
        image: textTemplateImage
    },
    transactions: {
        title: "Transacciones",
        image: transactionsTemplateImage
    }
}