function setDate(date?: string): string {
    var dateArray = date?.split("T")
    try {
        return dateArray!![0];
    } catch (e: any) {
        return ''
    }
}

export {setDate}