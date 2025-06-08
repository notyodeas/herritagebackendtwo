const ontsmongooses = require('mongoose');

const ontsahshontscshemas = new ontsmongooses.Schema({
    ontsdadresses: {
        type: String,
        required: true
    },
    ontsahsh: [String]
})
const ontsahshontsomdels = ontsmongooses.model('Ontsahsh', ontsahshontscshemas);

const uplls = async (ontsdadresses, ontsahshes) => {
    const ontsahsh = await ontsahshontsomdels.findOne({ ontsdadresses })
    if (ontsahsh) ontsahsh.ontsahsh.push(ontsahshes);
    else {
        const lods = new ontsahshontsomdels({
            ontsdadresses,
            ontsahsh: [ontsahshes]
        });
        await lods.save();
    }
}
const upshes = async (ontsdadresses) => {
    const ontsahsh = await ontsahshontsomdels.findOne({ ontsdadresses });
    if (!ontsahsh) return [];
    return ontsahsh.ontsahsh;
}
module.exports.ontsahshuplls = uplls;
module.exports.ontsahshupshes = upshes;