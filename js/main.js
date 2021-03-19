$(function () {
    let prumer = {
        znamky: [],
        getPrumer: function () {
            if (this.znamky.length == 0) {
                return 'Výsledek';
            }
            let celkovaZnamka = 0, celkovaVaha = 0;
            for (let i in this.znamky) {
                celkovaZnamka += this.znamky[i].znamka * this.znamky[i].vaha;
                celkovaVaha += this.znamky[i].vaha;
            }
            return (celkovaZnamka / celkovaVaha).toFixed(2);
        },
        getZnamky: function () {
            let result = '';
            for (let i in this.znamky) {
                result += this.znamky[i].znamka + '; ';
            }
            return result;
        },
        setZnamka: function (znamka, vaha) {
            const vahy = ["v100", "v80", "v60", "v40", "v20"]
            this.znamky.push(
                {
                    znamka: znamka,
                    vaha: 1 - 0.2 * vahy.indexOf(vaha)
                }
            )
        },
        delZnamka: function () {
            this.znamky.splice(-1, 1);
        }
    }

    $("#calc").on("click", function () {
        prumer.setZnamka(parseFloat($("#znamka").val()), $("#vaha").val());
        $("#result").html(`Průměrná známka: ${prumer.getPrumer()}`);
        $("#znamky").html(`${prumer.getZnamky()}`);
    })

    $("#del").on("click", function () {
        prumer.delZnamka();
        $("#result").html(`Průměrná známka: ${prumer.getPrumer()}`);
        $("#znamky").html(`${prumer.getZnamky()}`);
    })
})