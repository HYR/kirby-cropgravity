panel.plugin("hyr/cropgravity", {
    fields: {
      cropgravity: {
        props: {
          label: String,
          value: String,
          image: String,
          options: Array
        },
        methods: {
          save() {
            this.$emit("input", this.value);
          }
        },
        template: `
          <k-field v-bind="$props" class="kirby-cropgravity-field">
            <div class="image" v-if="image">
              <img :src="image"/>
              <div class="radios">
                <label
                  v-for="option in options"
                  :class="option.replace(' ', '-')">
                  <input
                    name="cropgravity"
                    type="radio"
                    :value="option"
                    v-model="value"
                    @change="save"
                    />
                  <span class="radio"></span>
                </label>
              </div>
            </div>
            <k-box v-else>
              That's not an image!
            </k-box>
          </k-field>
        `
      }
    }
  });