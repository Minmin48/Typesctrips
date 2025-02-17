
const Sepxep_label = (drops: { title: String }) => {
    return (
        <div>
            <label className="flex items-center space-x-2">
                <input type="radio" className="form-radio text-indigo-700" name="radio" defaultValue="Option 1" />
                <span className="text-gray-700 px-5 pb-2 pt-2">{drops.title}</span>
            </label>
        </div>
    )
}

export default Sepxep_label