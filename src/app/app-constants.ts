export class AppConstants {

    public static API_ROOT: string = 'http://localhost:8080';
    public static API_ENDPOINT: any = {
        BIRDS: AppConstants.API_ROOT + '/birds',
        ZONES: AppConstants.API_ROOT + '/zones'
    }    
    public static API_MESSAGES: any = {
        CREATE_ERROR: 'Ha ocurrido un error al guardar el registro',
        CREATE_SUCCESS: 'Se ha guardado correctamente el registro',
        DELETE_ERROR: 'Ha ocurrido un error al eliminar el registro',
        DELETE_SUCCESS: 'Se ha eliminado correctamente el registro',
        UPDATE_ERROR: 'Ha ocurrido un error al actualizar el registro',
        UPDATE_SUCCESS:'Se ha actualizado el registro correctamente',        
    }
    public static TEXTS: any = {
        CERRAR: 'Cerrar'
    }
    
}
