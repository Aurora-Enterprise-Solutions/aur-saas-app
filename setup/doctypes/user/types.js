export const USER_STATE = {
    ACTIVE   : 'active',
    INACTIVE : 'inactive',
}

export const USER_STATE_LABEL_I18N_PATH = {
    [USER_STATE.ACTIVE]   : `models.user.state.${USER_STATE.ACTIVE}`,
    [USER_STATE.INACTIVE] : `models.user.state.${USER_STATE.INACTIVE}`,
}
