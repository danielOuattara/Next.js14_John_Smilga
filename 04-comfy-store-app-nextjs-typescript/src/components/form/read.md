# fast component creation

```bash
touch {Buttons,CheckBoxInput,FormContainer,FormInput,ImageInput,ImageInputContainer,PriceInput,TextAreaInput}.tsx &&
for file in *.tsx; do echo "export default function $(basename "$file" .tsx)() {
  return <h2 className=\"text-4xl\">$(basename "$file" .tsx)</h2>;
}" > "$file"; done
```
