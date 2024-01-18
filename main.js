class Model {
    constructor(name, active = true) {
        this.name = name;
        this.active = active;
    }
}

let models = {
    digestive: [new Model('Intestine', true), new Model('Liver', true), new Model('Pancreas', true)],
    muscular: [new Model('Muscle 1', true), new Model('Muscle 2', true), new Model('Muscle 3', true)],
    circulatory: [new Model('Arteries', true), new Model('Veins', true), new Model('Heart', true)],
    organs: [new Model('Brain', true), new Model('Kidney', true), new Model('Lungs', true), new Model('Eyes', true), new Model('Diaphragm', true)],
    skeleton: [new Model('Skull', true), new Model('Upper Limbs', true), new Model('Lower Limbs', true), new Model('Rib Cage', true), new Model('Spinal Cord', true), new Model('Pelvic', true)]
};

let check_box_buffer = {};
let model_section = document.querySelector("#models_section");

document.querySelectorAll('#model_topics a-button').forEach((btn) => {
    btn.addEventListener('click', () => {
        let btn_name = btn.getAttribute('name');

        let checks = document.createElement('a-entity');
        checks.id = btn_name;
        let height = 1.8;
        models[btn_name].forEach((model) => {
            let checkbox = document.createElement('a-checkbox');
            checkbox.setAttribute('position', `1.8 ${height} 0`);
            checkbox.setAttribute('width', '3');
            checkbox.setAttribute('name', model.name.toLowerCase());
            checkbox.setAttribute('label', model.name);
            checkbox.setAttribute('checked', model.active);
            checks.appendChild(checkbox);
            height -= 0.45;

            checkbox.addEventListener('change', () => {
                model.active = checkbox.getAttribute('checked');
                console.log(model.name + ' is now ' + model.active);
                document.querySelector(`#${model.name.toLowerCase().replace(' ', '')}m`).setAttribute('visible', model.active);
            });
        });

        model_section.innerHTML = '';
        model_section.appendChild(checks);
        check_box_buffer[btn_name] = checks;
        
    });
});
