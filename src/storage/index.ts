import { Preferences } from '@capacitor/preferences';
export class Storages {
    private nameDb = 'furion';
    private nameDbBackGround = 'furionBackGround';
    private nameDbUsers = 'furionUsers';
    private nameDbStatus = 'furionStatus';
    async get() {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDb });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length !== 0) {
                return existingArray[0];
            }
            existingArray = [];
            return existingArray;            
        } catch (error) {
            throw new Error('Function not implemented. ' + error);
        }
    }
    async getById(id:number) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDb });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length !== 0) {
                let rs = existingArray[0].find((m: { id: any; }) => m.id === id);
                return rs;
            }
            existingArray = [];
            return existingArray;           
        } catch (error) {
            throw new Error('Function getById. ' + error);
        }
    }    
    async insert(bool: boolean, row: any) {
        try {
            let db = this.nameDbBackGround;
            if (bool) {
                db = this.nameDb;
            }
            const preferenceValue = await Preferences.get({ key: db });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray === null || existingArray === 'null' || existingArray.length === 0) {
                existingArray = [];
                existingArray.push(row);
                await Preferences.set({
                    key: db,
                    value: JSON.stringify(existingArray)
                });
            }          
        } catch (error) {
            throw new Error('Function insert. ' + error);
        }        
    }
    async update(bool: boolean, row: any, id:number) {
        try {
            let db = this.nameDbBackGround;
            if (bool) {
                db = this.nameDb;
            }
            const preferenceValue = await Preferences.get({ key: db });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length > 0) {
                let rs = existingArray[0].find((m: { id: any; }) => m.id !== id);
                existingArray = [];
                existingArray.push([rs, row[0]]);
                await Preferences.set({
                    key: db,
                    value: JSON.stringify(existingArray)
                });
            }           
        } catch (error) {
            throw new Error('Function update. ' + error);
        }                
    }
    async getBackGroundById(id: number) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDbBackGround });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length !== 0) {
                let rs = existingArray[0].find((m: { id: any; }) => m.id === id);
                return rs;
            }
            existingArray = [];
            return existingArray;          
        } catch (error) {
            throw new Error('Function getBackGroundById. ' + error);
        }
    }
    async getUserById(id: number) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDbUsers });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length !== 0) {
                let rs = existingArray[0].find((m: { id: any; }) => m.id === id);
                return rs;
            }
            existingArray = [];
            return existingArray;          
        } catch (error) {
            throw new Error('Function getUserById. ' + error);
        }
    }
    async delete() {
        try {
            const preferenceValueA = await Preferences.get({ key: this.nameDb });
            let existingArrayA = JSON.parse(preferenceValueA.value!);
            if (existingArrayA !== null || existingArrayA !== 'null' || existingArrayA.length > 0) {
                await Preferences.remove({ key: this.nameDb });
            }
            const preferenceValueB = await Preferences.get({ key: this.nameDbUsers });
            let existingArrayB = JSON.parse(preferenceValueB.value!);
            if (existingArrayB !== null || existingArrayB !== 'null' || existingArrayB.length > 0) {
                await Preferences.remove({ key: this.nameDbUsers });
            }
            const preferenceValueC = await Preferences.get({ key: this.nameDbBackGround });
            let existingArrayC = JSON.parse(preferenceValueC.value!);
            if (existingArrayC !== null || existingArrayC !== 'null' || existingArrayC.length > 0) {
                await Preferences.remove({ key: this.nameDbBackGround });
            }
            const preferenceValueD = await Preferences.get({ key: this.nameDbStatus });
            let existingArrayD = JSON.parse(preferenceValueD.value!);
            if (existingArrayD !== null) {
                await Preferences.remove({ key: this.nameDbStatus });
            }            
            console.log('Datos fueron eliminados correctamente');         
        } catch (error) {
            throw new Error('Function delete. ' + error);
        }         
    }    
    async getStatus() {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDbStatus });           
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null) {
                return existingArray[0].status;
            } else {
                return true;
            }       
        } catch (error) {
            throw new Error('Function getStatus. ' + error);
        }
    }
    async changeStatus(bool: boolean) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDbStatus });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray === null) {
                existingArray = [];
                existingArray.push({status:bool});
                await Preferences.set({
                    key: this.nameDbStatus,
                    value: JSON.stringify(existingArray)
                });
            }        
        } catch (error) {
            throw new Error('Function getUserById. ' + error);
        }
    }
    async insertUser(row: any) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDbUsers });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray === null || existingArray === 'null' || existingArray.length === 0) {
                existingArray = [];
                existingArray.push(row);
                await Preferences.set({
                    key: this.nameDbUsers,
                    value: JSON.stringify(existingArray)
                });
            }          
        } catch (error) {
            throw new Error('Function insert. ' + error);
        }        
    }
    async insertMsj(row: any) {
        try {
            const preferenceValue = await Preferences.get({ key: this.nameDb });
            let existingArray = JSON.parse(preferenceValue.value!);
            if (existingArray !== null || existingArray !== 'null' || existingArray.length > 0) {
                existingArray[0].push(row);
                await Preferences.set({
                    key: this.nameDb,
                    value: JSON.stringify(existingArray)
                });
            }          
        } catch (error) {
            throw new Error('Function insert. ' + error);
        }        
    }
    async deleteStatus() {
        try {
            const preferenceValueD = await Preferences.get({ key: this.nameDbStatus });
            let existingArrayD = JSON.parse(preferenceValueD.value!);
            if (existingArrayD !== null) {
                await Preferences.remove({ key: this.nameDbStatus });
            }
            console.log('Datos fueron eliminados correctamente');         
        } catch (error) {
            throw new Error('Function delete. ' + error);
        }         
    }  
}