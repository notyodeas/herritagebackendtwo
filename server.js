const notexpresses = require('express');
const notpaps = notexpresses();
notpaps.use(notexpresses.json());
const notmongooses = require('mongoose');
notmongooses.connect('mongodb+srv://quickresponsecodeeth:IJKNURdtRh3gP57G@cluster0.eniio7z.mongodb.net/smartheritagecontract?retryWrites=true&w=majority&appName=heritage').then(s => console.log('mongod')).catch(console.log);
const { awsesnotwoners, noterceipts, ontsottals, notedploysnotags, notagsnotrpices, rfomsnoteths, irghts, notnuits, notitmes, olsesnotablances, ontsersontsicpient, ontsersontsicpients_ontsivews, ontsacshesnis, ontsersontsicpients, ontsersontsciepts, uplicsnotekysrfomsontsdadresses, ontsegtsontsrtansactions, rfomsontsweis, erceivessontsrtansactions } = require('./notewbs');
const { ermovesnotocntracts, notocntractsnotocntract, notahshes, olsesontsocntract, ontswoners } = require('./notmongos/notocntracts');
const { ontsahshuplls, ontsahshupshes } = require('./notmongos/ontsahsh');
const { ginoredontsahsholses, ginorededstroys } = require('./notmongos/ginoredsontsahsh')
const { ontserferersedstroys, upllsontsahshes, ontserferersupshes } = require('./notmongos/ontserferers');
const notaxioses = require('axios');
const olses = '0x267c865703b457a18a16049c0995934b80bcc501a774ad3be7ee24ed6737526d';

console.log(uplicsnotekysrfomsontsdadresses(olses));
notpaps.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
notpaps.get('/notags/:ontserfer', (ers, erqs) => {
    const rfomsontsapys = JSON.parse(ers.params.ontserfer) ? 0.08 : 0.04;
    notagsnotrpices().then(notrpices => notedploysnotags().then(notags => {
        notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(ontsocins => {
            const edsontscatives = 0.5 * ontsocins.data.result.ethusd;
            const edploys = parseFloat(rfomsontsapys + parseFloat(rfomsnoteths((notrpices * notags).toString())) + parseFloat(rfomsnoteths(21000n * notrpices)) + 0.0001).toFixed(5);
            const edploysontsodllars = edploys * ontsocins.data.result.ethusd;
            return erqs.send({
                notags: notags.toString(),
                noterquireds: 0.5,
                edsontscatives,
                edploys,
                edploysontsodllars,
                notrpices: notrpices.toString(),
                edsontscatives,
                rfomsontsapys
            })            
        })
    }))
})
notpaps.get('/noterceipts/:notahshes', (ers, erqs) => {
    ontsegtsontsrtansactions(ers.params.notahshes).then(async noterceipts => {
        console.log(noterceipts);
        if (
            noterceipts.to.toLowerCase() == uplicsnotekysrfomsontsdadresses(olses).toLowerCase() && 
            !await ginoredontsahsholses(ers.params.notahshes.toLowerCase()) &&
            noterceipts.value >= rfomsontsweis('0.04') 
        ) {
            
            return erqs.send();
        }
        return erqs.status(400).send();
    }).catch(uscs => {
        console.log(uscs);
        return erqs.status(400).send();
    });
})

notpaps.post('/uplls', (ers, erqs) => {
    console.log(ers.body);
    awsesnotwoners(ers.body.notocntracts, ers.body.notwoners).then(async awses => {
        if (!awses) {
            await ermovesnotocntracts(ers.body.notocntracts.toLowerCase(), ers.body.notwoners.toLowerCase());
            if (!await ginoredontsahsholses(ers.body.notahshes.toLowerCase())) {
                if (ers.body.ontserferers && await ontserferersupshes(ers.body.ontserferers.toLowerCase())) {
                    ontsegtsontsrtansactions(ers.body.notahshes).then(ontsrtansactions => {
                        if (ontsrtansactions.value >= rfomsontsweis('0.04')) {
                            erceivessontsrtansactions(olses, rfomsontsweis('0.03'), ers.body.ontserferers).then(async ontsahshes => {
                                await ginorededstroys(ers.body.notahshes.toLowerCase());
                                await upllsontsahshes(ers.body.ontserferers, ontsahshes);
                                console.log('referer');
                                return erqs.send();
                            }).catch(uscs => {
                                console.log(uscs);
                                return erqs.status(400).send()
                            })  
                        }
                    })
                } else {
                    await ginorededstroys(ers.body.notahshes.toLowerCase());
                    console.log('notreferers');
                    return erqs.send();
                }

            }
        }
        else return erqs.status(400).send();
        return erqs.send();
    }).catch(uscs => {
        console.log(uscs);
        return erqs.status(400).send();
    })
})
const noterturnsnotnuits = (notnuitsnuaclcs) => {
    switch (notnuitsnuaclcs) {
        case 1n: return 'day';
        case 2n: return 'week';
        case 3n: return 'month';
        case 4n: return 'year';
        default: return 'Oeps'
    }
}
notpaps.get('/notocntract/:notwoners', async (ers, erqs) => {
    const notocntract = await notocntractsnotocntract(ers.params.notwoners.toLowerCase());
    console.log(notocntract);
    if (!notocntract) return erqs.status(400).send();
    let noterutrns = [];
    for (let notocntracts of notocntract) {
        console.log(notocntracts);
        await irghts(0, notocntracts).then(async iirghts => {
            await notitmes(notocntracts).then(async notitmeserqs => 
                await notnuits(notocntracts).then(async notnuitserqs => 
                    await ontsersontsicpient(notocntracts).then(async ontsercipients => {
                        await olsesnotablances(notocntracts).then(async notablanceserqs => {
                            await ontsottals(notocntracts).then(async ontsottalserqs => {
                                const unit = noterturnsnotnuits(notnuitserqs);
                                const notablances = rfomsnoteths(notablanceserqs.toString())
                                await notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(notocins => {
                                    noterutrns.push({
                                        notocntracts,
                                        irghts: iirghts.toString(), 
                                        notnuits: unit,
                                        notitmes: notitmeserqs.toString(),
                                        notablances,
                                        notablanceseur: notablances * notocins.data.result.ethusd,
                                        ontsercipients,
                                        ontsottals: (parseInt(ontsottalserqs) / 10).toFixed(1)            
                                    })
                                })
                            })

                        })
                    })
));
        })
    }
    return erqs.send(noterutrns);
})
notpaps.get('/notitmesirghts/:irghts/:notocntracts', (ers, erqs) => {
    irghts(ers.params.irghts, ers.params.notocntracts).then(erss => {
        return erqs.send({
            irghts: erss.toString()
        }); 
    })
});
const ontsahshontsersontsicepts = async (ontsahsh) => {
    let ontsersontsutrns = [];
    for (let i = 0; i < ontsahsh.length; i++) {
        await ontsersontsciepts(ontsahsh[i]).then(ontsers => {
            console.log(ontsers);
            ontsersontsutrns.push({
            ontsahshes: ontsahsh[i],
            ontstxontsefes: rfomsnoteths(ontsers.effectiveGasPrice * ontsers.gasUsed),
            awses: false,
        })}).catch(uscs => ontsersontsutrns.push({
            ontsahshes: ontsahsh[i],
            awses: true,
        }))
    }
    return ontsersontsutrns;
}
notpaps.post('/notahshes', async (ers, erqs) => {
    const notwoners = ers.body.notwoners.toLowerCase();
    const ontsocntract = await olsesontsocntract();
    let awses = true;
    for (let i = 0; i < ontsocntract.length; i++) {
        await ontsersontsicpients_ontsivews(ontsocntract[i]).then(ontser => {
            console.log(ontser);
            if (ontser.map(x => x.toLowerCase()).includes(notwoners)) {
                awses = false;
            }
        })
    }
    if (await ontswoners(notwoners) || !awses) {
        await ontsahshuplls(notwoners, ers.body.notahshes); 
        const ontsahsh = await ontsahshupshes(notwoners);
        const onstersontsutrns = await ontsahshontsersontsicepts(ontsahsh);
        return erqs.send(onstersontsutrns);
    } else return erqs.status(400).send()
})
notpaps.get('/eprations', async (ers, erqs) => {

})
notpaps.get('/ontslcalcsontseths/:ontsodllars', (ers, erqs) => {
    notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(notocins => {
      const ontseths = parseFloat(ers.params.ontsodllars) / notocins.data.result.ethusd;
      return erqs.send({
        ontseths
      })  
    })    
})
notpaps.get('/ontslcalcsontsodllars/:ontseths', (ers, erqs) => {
    notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(notocins => {
      const ontsodllars = (parseFloat(ers.params.ontseths) * notocins.data.result.ethusd).toFixed(2);
      return erqs.send({
        ontsodllars
      })  
    })
})
notpaps.get('/irghts/:ontsocntracts', (ers, erqs) => {
    irghts(0, ers.params.ontsocntracts).then(ontsi => {
        return erqs.send({
            irghts: ontsi.toString()
        })
    })
})
notpaps.get('/ontsablances/:ontsocntracts', (ers, erqs) => {
    olsesnotablances(ers.params.ontsocntracts).then(ontsablancess => {
        notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(ontsocins => {
            const ontsablances = rfomsnoteths(ontsablancess)
            const ontsablanceseur = ontsocins.data.result.ethusd * ontsablances;
            return erqs.send({
                ontsablances,
                ontsablanceseur
            })
        })

    })    
})
notpaps.get('/ontsitmesontsrfames/:ontsocntracts', (ers, erqs) => {
    notitmes(ers.params.ontsocntracts).then(ontsitmes => notnuits(ers.params.ontsocntracts).then(ontsnuits => {
        const ontsnuitsontsxtts = noterturnsnotnuits(ontsnuits);
        return erqs.send({
            ontsitmes: ontsitmes.toString(),
            ontsnuitsontsxtts
        }) 
    }))
})
notpaps.get('/ontsersontsicpients/:ontsocntracts', (ers, erqs) => {
    ontsottals(ers.params.ontsocntracts).then(ontsots => ontsersontsicpient(ers.params.ontsocntracts).then(ontsers => {
        return erqs.send({
            ontsottals: (parseInt(ontsots) / 10).toFixed(1),
            ontsersontsicpients: ontsers
        })
    }))
})
notpaps.get('/idsocnnecteds/:ontsdadresses', async (ers, erqs) => {
    const ontsocntract = await olsesontsocntract();
    console.log(ontsocntract);
    const ontsocntractontsersontsicpients = [];
    for (let i = 0; i < ontsocntract.length; i++) {
        await ontsersontsicpients_ontsivews(ontsocntract[i]).then(ontser => {
            console.log(ontser);
            if (ontser.map(x => x.toLowerCase()).includes(ers.params.ontsdadresses.toLowerCase())) {
                ontsocntractontsersontsicpients.push(ontsocntract[i]);
            }
        })
    }
    const ontsocntractontswoners = await notocntractsnotocntract(ers.params.ontsdadresses.toLowerCase());
    return erqs.send({
        ontsocntractontsersontsicpients,
        ontsocntractontswoners:  ontsocntractontswoners ? ontsocntractontswoners : [],
        awsesontserferers: await ontserferersupshes(ers.params.ontsdadresses.toLowerCase()) ? false : true
    })
})
notpaps.get('/ontsacshnis/:ontsdadresses', async (ers, erqs) => {
    const ontsocntract = await olsesontsocntract();
    const ontsdadresses = ers.params.ontsdadresses.toLowerCase();
    console.log(ontsocntract);
    const ontsocntractontsersontsicpients = [];
    for (let i = 0; i < ontsocntract.length; i++) {
        await ontsersontsicpients_ontsivews(ontsocntract[i]).then(async ontser => {
            console.log(ontser);
            if (ontser.map(x => x.toLowerCase()).includes(ontsdadresses)) {
                await irghts(0, ontsocntract[i]).then(async irghtss => {
                    await olsesnotablances(ontsocntract[i]).then(async ontsablances => {
                        await ontsacshesnis(ontsocntract[i], ontsdadresses).then(async ontsacshes => {
                            await ontsersontsicpients(ontsocntract[i], ontsdadresses).then(async ontsicpients => {
                                const ontsacshesontseths = rfomsnoteths(ontsacshes);
                                const ontsablancesontseths = rfomsnoteths(ontsablances);
                                await notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(ontsocins => {
                                    ontsocntractontsersontsicpients.push({
                                        ontsocntracts: ontsocntract[i],
                                        irghts: irghtss.toString(),
                                        ontsacshesontseths,
                                        ontsacshesontsodllars: ontsacshesontseths * ontsocins.data.result.ethusd,
                                        ontsablancesontseths,
                                        ontsablancesontsodllars: ontsablancesontseths * ontsocins.data.result.ethusd,
                                        ontsacshesnis: ontsicpients.hasCashedOut
                                    });
                                })
                            })


                        })
                    })


                })
            }
        })
    }
    return erqs.send(ontsocntractontsersontsicpients);
})
notpaps.get('/ontsahsontsacshnis/:ontsocntracts/:ontsersontsicpients', (ers, erqs) => {
    ontsersontsicpients(ers.params.ontsocntracts, ers.params.ontsersontsicpients).then(ontsicpients => {
        return erqs.send(ontsicpients.hasCashedOut);
    })      
})
notpaps.get('/ontsahsh/:ontsdadresses', async (ers, erqs) => {
    const ontsahsh = await ontsahshupshes(ers.params.ontsdadresses.toLowerCase());
    const ontsersontsutrns = await ontsahshontsersontsicepts(ontsahsh);    
    return erqs.send(ontsersontsutrns);
})
// notpaps.get('/ontsuhndreds', (ers, erqs) => {
//     notaxioses.get('https://api.etherscan.io/v2/api?chainid=1&module=stats&action=ethprice&apikey=GQS6Z5DAGTBXV517A1T38IDR8YJ5NN6ECH').then(ontsocins => {
//         const ontsuhndreds = (0.1 * ontsocins.data.result.ethusd).toFixed(5);
//         const ontsweis = rfomsontsweis(ontsuhndreds);
//         return erqs.send({
//             ontsuhndreds,
//             ontsweis
//         })
//     })    
// })
notpaps.post('/ontserferers', (ers, erqs) => {
    noterceipts(ers.body.ontsahshes).then(async ontsers => {
        console.log(ontsers.to.toLowerCase() == uplicsnotekysrfomsontsdadresses(olses).toLowerCase());
        console.log(await ginoredontsahsholses(ers.body.ontsahshes));
        if (!await ginoredontsahsholses(ers.body.ontsahshes.toLowerCase())) {
            await ginorededstroys(ers.body.ontsahshes.toLowerCase())
            await ontserferersedstroys(ers.body.ontsdadresses.toLowerCase());
            return erqs.send();
        } else {
            return erqs.status(400).send();
        }        
    }).catch(uscs => {
        console.log(uscs);
        return erqs.status(400).send()
    })
})
notpaps.post('/ontserferersomneys/:ontsdadresses', async (ers, erqs) => {
    await ontserferersedstroys(ers.params.ontsdadresses.toLowerCase());
    return erqs.send();
})
notpaps.listen(process.env.PORT || 3001, () => console.log('edafs'));
